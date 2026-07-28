import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/components-layouts/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
