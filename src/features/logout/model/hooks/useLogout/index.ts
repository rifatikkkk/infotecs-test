import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/entities/user/model";
import { AUTH_CONFIG } from "@/shared/config";

export const useLogout = () => {
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.removeItem(AUTH_CONFIG.TOKEN_KEY);
    queryClient.setQueryData(queryKeys.auth.user, null);
    queryClient.invalidateQueries({ queryKey: queryKeys.auth.user });
  };

  return { logout };
};
