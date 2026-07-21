import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="h-screen bg-blue-200 flex justify-center items-center text-2xl font-bold">
      <h1>Home</h1>  
    </div>
  );
};

export default Home;
