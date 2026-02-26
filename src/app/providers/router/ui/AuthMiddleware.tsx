import React from "react";
import { useAuthQuery } from "@/shared/hooks";
import { Navigate } from "react-router";
import { AppRoutes, routePaths } from "@/shared/config";

interface AuthMiddlewareProps {
  children: React.ReactNode;
  redirectTo?: string;
  requireAuth?: boolean;
}

export const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({
  children,
  requireAuth = true,
}) => {
  const { user } = useAuthQuery();

  if (requireAuth && !user) {
    return <Navigate to={routePaths[AppRoutes.LOGIN]} />;
  }

  if (!requireAuth && user) {
    return <Navigate to={routePaths[AppRoutes.USERS]} />;
  }

  return <>{children}</>;
};
