import React from "react";
import { NavLink } from "react-router";
import { Box, ShoppingCart, Store } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#111113]/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-8">
        {/* Logo */}
        <NavLink
          to="/main"
          className="flex items-center gap-2 text-white font-bold text-2xl"
        >
          <Store className="text-lime-400" size={28} />
          <span>DartMart</span>
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-zinc-400 font-medium">
          <NavLink
            to="/main"
            end
            className={({ isActive }) =>
              `transition duration-300 hover:text-lime-400 ${
                isActive ? "text-lime-400" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/product"
            className={({ isActive }) =>
              `transition duration-300 hover:text-lime-400 ${
                isActive ? "text-lime-400" : ""
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              `transition duration-300 hover:text-lime-400 ${
                isActive ? "text-lime-400" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <NavLink
            to="/main/cart"
            className="text-zinc-400 hover:text-lime-400 transition"
          >
            <ShoppingCart size={22} />
          </NavLink>

          <NavLink
            to="/main/orders"
            className="text-zinc-400 hover:text-lime-400 transition"
          >
            <Box size={22} />
          </NavLink>

          <button className="px-5 py-2 rounded-xl bg-lime-400 text-black font-semibold hover:brightness-110 transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
