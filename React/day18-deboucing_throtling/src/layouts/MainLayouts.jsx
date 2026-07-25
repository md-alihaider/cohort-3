import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayouts = () => {
  return (
    <div>
      <nav className="flex gap-5 p-2 items-center justify-center text-2xl">
        <NavLink className={" hover:text-blue-950 font-semibold"} to={"/"}>
          App
        </NavLink>
        <NavLink className={" hover:text-blue-950 font-semibold"} to={"/about"}>
          About
        </NavLink>
        <NavLink
          className={" hover:text-blue-950 font-semibold"}
          to={"/contact"}
        >
          Contact
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayouts