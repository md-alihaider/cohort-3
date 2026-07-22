import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { setLoggedInUser } = useContext(Auth);
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
      <button
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          toast.warn("User Logged Out");
          setLoggedInUser(null);
        }}
        className=" bg-red-500 py-3 hover:bg-amber-700 text-white rounded cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
