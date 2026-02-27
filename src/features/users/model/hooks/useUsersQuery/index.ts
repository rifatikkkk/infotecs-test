import { useQuery } from "@tanstack/react-query";
import { usersListApi } from "../../api/usersListApi";
import { queryKeys } from "@/entities/users/model";

export const useUsersQuery = () => {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: () => usersListApi(),
  });
};
