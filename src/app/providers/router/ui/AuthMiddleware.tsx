import React from "react";
import { Navigate } from "react-router";
import { AppRoutes, routePaths } from "@/shared/config";
import { useCurrentUser } from "@/entities/user/model";

interface AuthMiddlewareProps {
  children: React.ReactNode;
  redirectTo?: string;
  requireAuth?: boolean;
}

export const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({
  children,
  requireAuth = true,
}) => {
  const { user } = useCurrentUser();

  if (requireAuth && !user) {
    return <Navigate to={routePaths[AppRoutes.LOGIN]} />;
  }

  if (!requireAuth && user) {
    return <Navigate to={routePaths[AppRoutes.USERS]} />;
  }

  return <>{children}</>;
};
