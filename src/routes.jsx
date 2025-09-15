import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Main from "./pages/Main";
import TestPage from "./pages/Test";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
      ],
    },
    { path: "/test", element: <TestPage /> },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

export default router;
