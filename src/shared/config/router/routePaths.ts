export const AppRoutes = {
  USERS: "users",
  LOGIN: "login",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.USERS]: "/users",
  [AppRoutes.LOGIN]: "/login",
};
