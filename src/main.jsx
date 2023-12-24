import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Provider/AuthProvider";
import { Box, Typography } from "@mui/material";
import HomePage from "./Components/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: (
          <Box>
            <Typography>login</Typography>
          </Box>
        ),
      },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </QueryClientProvider>
);
