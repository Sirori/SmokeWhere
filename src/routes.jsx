import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Main from "./pages/Main";

const router = createBrowserRouter([
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
]);


export default router;