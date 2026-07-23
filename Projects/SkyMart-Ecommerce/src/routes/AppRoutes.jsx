import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicRoutes from './PublicRoutes';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';


const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes