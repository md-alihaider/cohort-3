import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="p-3 border-r border-gray-500 flex flex-col justify-between ">
      <div className="flex flex-col gap-10">
        <NavLink to={"/main"}>
          <h1 className="text-3xl font-semibold">E-comm</h1>
        </NavLink>
        <div className="flex flex-col gap-4 ml-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " font-semibold text-red-500 border-b border-gray-500"
                : " text-black border-b border-gray-500"
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " font-semibold text-red-500 border-b border-gray-500"
                : " text-black border-b border-gray-500"
            }
            to={"/main/users"}
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " font-semibold text-red-500 border-b border-gray-500"
                : " text-black border-b border-gray-500"
            }
            to={"/main/products"}
          >
            Products
          </NavLink>
        </div>
      </div>
      <button className=" bg-red-500 py-3 hover:bg-amber-700 text-white rounded cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
