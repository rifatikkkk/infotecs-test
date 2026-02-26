import React from "react";
import ReactDOM from "react-dom";

import App from "@/app/App";
import { QueryProvider } from "@/app/providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryProvider>
  </React.StrictMode>,
  document.querySelector("#root"),
);
