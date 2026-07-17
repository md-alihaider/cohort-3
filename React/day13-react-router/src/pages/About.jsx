import React from "react";
import { Outlet, useNavigate } from "react-router";
const About = () => {
  let navigate = useNavigate();
  return (
    <div className=" h-screen flex items-center justify-center">
      <h1>This is About</h1>
      <button
        className="rounded-lg bg-amber-50 text-black p-2"
        onClick={() => navigate('/about/nested')}
      >
        Show Nested about
      </button>
      <Outlet />
    </div>
  );
};

export default About;
