import React from "react";
import { useLogout } from "../model/hooks/useLogout";
import { Button } from "@/shared/ui";

export const LogoutButton: React.FC = () => {
  const { logout } = useLogout();

  return <Button onClick={logout}>Выход</Button>;
};
