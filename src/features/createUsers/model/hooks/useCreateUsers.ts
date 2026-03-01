import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsersApi } from "../api/createUsersApi";
import { queryKeys, Users } from "@/entities/users/model";

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUsersApi,
    mutationKey: ["createUser"],
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.users });
      const previousUsers = queryClient.getQueryData<Users[]>(queryKeys.users);

      const optimisticUser: Users = {
        id: Date.now().toString(),
        name: data.name,
        avatar: data.avatar,
        createdAt: new Date().toISOString(),
      };

      queryClient.setQueryData<Users[]>(
        queryKeys.users,
        (oldData: Users[] | undefined) => [optimisticUser, ...(oldData || [])],
      );
      return { previousUsers, optimisticUser };
    },
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData<Users[]>(
        queryKeys.users,
        (oldData: Users[] | undefined) => {
          const withoutOptimistic = (oldData || []).filter(
            (user) => user.id !== context?.optimisticUser.id,
          );
          return [data, ...withoutOptimistic];
        },
      );
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(queryKeys.users, context?.previousUsers);
    },
  });
};
