import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import App from "../App";
import { getUsers } from "../apis/usersApi";
const AboutPage = lazy(() => import("../Pages/AboutPage"));
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
          loader: getUsers, //it fetch data before showing the page
          hydrateFallbackElement: <h1>Loading user data.</h1>, // this is for until data fetching is happening give something to show user
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
