import React from "react";
import type { RouteProps } from "react-router";

import { LoginPage } from "@/pages/Login";
import { UsersPage } from "@/pages/Users";

import { AppRoutes, routePaths } from "@/shared/config";
import { AuthMiddleware } from "./ui/AuthMiddleware";
import { NotFoundPage } from "@/pages/NotFound";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.USERS],
    element: (
      <AuthMiddleware requireAuth>
        <UsersPage />
      </AuthMiddleware>
    ),
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: (
      <AuthMiddleware requireAuth={false}>
        <LoginPage />
      </AuthMiddleware>
    ),
  },
  {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
