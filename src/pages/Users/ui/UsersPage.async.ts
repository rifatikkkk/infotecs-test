import React, { lazy } from "react";

export const UsersPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error Simulate delay
      setTimeout(() => resolve(import("./UsersPage")), 1000);
    }),
);
