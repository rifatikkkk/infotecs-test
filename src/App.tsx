import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({});

export default function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <h1>hello</h1>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
