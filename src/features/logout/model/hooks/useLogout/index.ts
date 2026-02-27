import { queryKeys } from "@/entities/user/model";
import { AUTH_CONFIG } from "@/shared/config";
import { useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.removeItem(AUTH_CONFIG.TOKEN_KEY);
    queryClient.setQueryData(queryKeys.auth.user, null);
    queryClient.invalidateQueries({ queryKey: queryKeys.auth.user });
  };

  return { logout };
};
