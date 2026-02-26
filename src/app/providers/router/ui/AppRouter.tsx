import { Route, Routes } from "react-router";
import { routeConfig } from "../routerConfig";
import React, { Suspense } from "react";

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense key={path} fallback={<>Загрузка...</>}>
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
