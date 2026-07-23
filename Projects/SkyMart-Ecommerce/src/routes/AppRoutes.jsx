import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import PublicRoutes from './PublicRoutes';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import ProtectedRoutes from './ProtectedRoutes';
import MainLayout from '../layouts/MainLayout';
import ShopPage from '../pages/ShopPage';
import AboutPage from '../pages/AboutPage';


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
              index: true,
              element: <Navigate to="/login" replace />,
            },
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
    {
      path: "/",
      element: <ProtectedRoutes/>,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: "home",
              element: <HomePage />,
            },
            {
              path: "products",
              element: <ShopPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
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