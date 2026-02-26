import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginRequest } from "@/shared/api";
import { AUTH_CONFIG } from "@/shared/config";
import { getErrorMessage } from "@/shared/utils";
import { getCurrentUser, queryKeys } from "@/entities/user/model";

export const useAuth = () => {
  const queryClient = useQueryClient();

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
    loginMutate: loginMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    loginError,
  };
};
