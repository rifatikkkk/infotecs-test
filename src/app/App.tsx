import React, { Suspense } from "react";
import { AppRouter } from "./providers";
import "./styles/index.css";
import "antd/dist/antd.css";

const App: React.FC = () => {
  return (
    <Suspense fallback={<></>}>
      <AppRouter />
    </Suspense>
  );
};

export default App;
