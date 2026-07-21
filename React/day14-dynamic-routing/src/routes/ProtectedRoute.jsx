import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }) => {
  let isAdmin = false

  if (!isAdmin) {
    alert("You are not admin")
    return <Navigate to={"/"}/>
  }

  return children
}

export default ProtectedRoute