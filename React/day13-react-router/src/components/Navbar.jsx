import React from 'react'
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between mb-2 ">
      <h1>logo</h1>
      <div className=" flex items-center justify-between gap-10 cursor-pointer">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <button>Login</button>
    </nav>
  );
}

export default Navbar