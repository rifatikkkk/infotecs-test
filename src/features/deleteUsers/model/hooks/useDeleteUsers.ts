import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys, Users } from "@/entities/users/model";
import { deleteUsersApi } from "../api/deleteUsersApi";

export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: string }) => deleteUsersApi(id),
    mutationKey: ["deleteUser"],
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.users });
      const previousUsers = queryClient.getQueryData<Users[]>(queryKeys.users);

      queryClient.setQueryData<Users[]>(
        queryKeys.users,
        (oldData: Users[] | undefined) => {
          return (oldData || []).filter((user) => user.id !== data.id);
        },
      );

      return { previousUsers };
    },
    onError: (_, __, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(queryKeys.users, context.previousUsers);
      }
    },
  });
};
