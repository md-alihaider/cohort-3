import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import App from "../App";
const AboutPage = lazy(()=> import("../Pages/AboutPage"))
const ContactPage = lazy(() => import("../Pages/ContactPage"));
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<h1>Loading about</h1>}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<h1>Loading contact</h1>}>
              <ContactPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
