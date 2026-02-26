import { useQuery } from "@tanstack/react-query";
import { User } from "../../types/UserSchema";
import { queryKeys } from "../../constants/queryKeys";

export const getCurrentUser = (): User | null => {
  const token = localStorage.getItem("auth_token");

  if (!token) {
    return null;
  }

  return {
    id: "1",
    login: "admin",
    token: token,
  };
};

export const useCurrentUser = () => {
  const userQuery = useQuery({
    queryKey: queryKeys.auth.user,
    queryFn: getCurrentUser,
  });

  return {
    user: userQuery.data,
  };
};
