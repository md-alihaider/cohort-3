import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import App from "../App";
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <MainLayouts />,
      children: [
        {
          path:"",
          element:<App/>
        },
        {
          path:"about",
          element:<AboutPage/>
        },
        {
          path: "contact",
          element:<ContactPage/>
        }
      ]
    }
  ])
  return <RouterProvider router={router} />;
};

export default AppRoutes;
