export const AppRoutes = {
  USERS: "users",
  LOGIN: "login",

  NOT_FOUND: "not_found",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.USERS]: "/users",
  [AppRoutes.LOGIN]: "/login",

  [AppRoutes.NOT_FOUND]: "*",
};
