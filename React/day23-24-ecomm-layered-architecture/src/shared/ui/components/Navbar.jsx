import React, { useState } from "react";
import { NavLink } from "react-router";
import { Box, ShoppingCart, Store, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#111113]/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/main"
          className="flex items-center gap-2 text-white font-bold text-2xl"
        >
          <Store className="text-lime-400" size={28} />
          <span>DartMart</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-zinc-400 font-medium">
          <NavLink
            to="/main"
            end
            className={({ isActive }) =>
              `transition hover:text-lime-400 ${
                isActive ? "text-lime-400" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/product"
            className={({ isActive }) =>
              `transition hover:text-lime-400 ${
                isActive ? "text-lime-400" : ""
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              `transition hover:text-lime-400 ${
                isActive ? "text-lime-400" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-5">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#111113]">
          <div className="flex flex-col px-6 py-5 space-y-5">
            <NavLink
              to="/main"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-lime-400" : "text-zinc-300"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/main/product"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-lime-400" : "text-zinc-300"
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/main/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-lime-400" : "text-zinc-300"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/main/cart"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-zinc-300"
            >
              <ShoppingCart size={20} />
              Cart
            </NavLink>

            <NavLink
              to="/main/orders"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-zinc-300"
            >
              <Box size={20} />
              Orders
            </NavLink>

            <button className="w-full py-3 rounded-xl bg-lime-400 text-black font-semibold">
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
