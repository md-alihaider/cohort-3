import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";

const PublicRoutes = () => {
  console.log("Public rendering..")
  const { loggedInUser } = useContext(Auth);

  if (loggedInUser) {
    return <Navigate to={"/main"} />;
  }
  return <Outlet />;
};

export default PublicRoutes;
