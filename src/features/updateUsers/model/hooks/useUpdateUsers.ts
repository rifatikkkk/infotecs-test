import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUsersApi } from "../api/updateUsersApi";
import { queryKeys, Users, UsersData } from "@/entities/users/model";

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UsersData }) =>
      updateUsersApi(id, data),
    mutationKey: ["updateUser"],
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.users });
      const previousUsers = queryClient.getQueryData<Users[]>(queryKeys.users);

      queryClient.setQueryData<Users[]>(
        queryKeys.users,
        (oldData: Users[] | undefined) => {
          return (oldData || []).map((user) =>
            user.id === id ? { ...user, ...data } : user,
          );
        },
      );

      return { previousUsers };
    },
    onSuccess: (data) => {
      queryClient.setQueryData<Users[]>(
        queryKeys.users,
        (oldData: Users[] | undefined) => {
          return (oldData || []).map((user) =>
            user.id === data.id ? data : user,
          );
        },
      );
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(queryKeys.users, context?.previousUsers);
    },
  });
};
