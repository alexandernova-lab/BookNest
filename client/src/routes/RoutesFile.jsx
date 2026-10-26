import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import LibraryPage from "../pages/LibraryPage.jsx";
import CreateBookPage from "../pages/CreateBookPage.jsx";

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
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "library",
          element: <LibraryPage />,
        },
        {
          path: "/create",
          element: <CreateBookPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RoutesFile;
