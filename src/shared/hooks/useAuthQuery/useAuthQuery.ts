import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loginRequest } from "@/shared/api";
import { AUTH_CONFIG } from "@/shared/config";
import { queryKeys } from "@/shared/constants";
import { getErrorMessage } from "@/shared/utils";

interface User {
  id: string;
  login: string;
  token: string;
}

const getCurrentUser = (): User | null => {
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

export const useAuthQuery = () => {
  const queryClient = useQueryClient();

  const userQuery = useQuery({
    queryKey: queryKeys.auth.user,
    queryFn: getCurrentUser,
  });

  const loginMutation = useMutation({
    mutationFn: ({ login, password }: { login: string; password: string }) =>
      loginRequest(login, password),
    onSuccess: (token) => {
      localStorage.setItem(AUTH_CONFIG.TOKEN_KEY, token);

      queryClient.invalidateQueries({ queryKey: queryKeys.auth.user });

      queryClient.setQueryData(queryKeys.auth.user, getCurrentUser());
    },
  });

  const loginError = loginMutation.error
    ? getErrorMessage(loginMutation.error)
    : null;

  return {
    user: userQuery.data,
    loginMutate: loginMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    loginError,
  };
};
