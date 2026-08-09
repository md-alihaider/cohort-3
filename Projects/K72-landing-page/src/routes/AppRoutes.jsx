import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import AgencyPage from "../pages/AgencyPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/projects",
      element: <ProjectPage />,
    },
    {
      path: "/agency",
      element: <AgencyPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
