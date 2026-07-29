import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import AuthLayout from '../layouts/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element:<AuthLayout/>,
      children: [
        {
          index: true,
          element:<LoginPage/>
        },
        {
          path: "register",
          element:<RegisterPage/>
        }
      ]
    },
    {
      path:"/main",
      element:<MainLayout/>,
      children: [
        {
          index: true,
          element:<HomePage/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router }/>
  )
}

export default AppRoutes