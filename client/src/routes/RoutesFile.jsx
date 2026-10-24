import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";

const RoutesFile = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RoutesFile;
