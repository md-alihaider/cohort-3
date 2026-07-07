import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <nav className="bg-gray-900 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LEFT: User Info */}
          <div className="flex-1 flex items-center justify-start">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
              <div className="w-9 h-9 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner">
                U
              </div>
              <span className="font-semibold text-gray-100 text-lg tracking-wide">
                User
              </span>
            </div>
          </div>

          {/* MIDDLE: Navigation */}
          <div className="hidden md:flex shrink-0 items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-indigo-400 font-medium transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-indigo-400 font-medium transition"
            >
              About
            </a>
            <a
              href="#usercard"
              className="text-gray-300 hover:text-indigo-400 font-medium transition"
            >
              Usercard
            </a>
          </div>

          {/* RIGHT: Action Button */}
          <div className="flex-1 flex items-center justify-end">
            <button
              onClick={() => setToggle((prev) => !prev)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-md font-medium shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Create
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Fallback */}
      <div className="md:hidden flex justify-center space-x-6 pb-4 pt-2 border-t border-gray-800 bg-gray-900">
        <a
          href="#home"
          className="text-gray-400 hover:text-indigo-400 font-medium text-sm"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-400 hover:text-indigo-400 font-medium text-sm"
        >
          About
        </a>
        <a
          href="#usercard"
          className="text-gray-400 hover:text-indigo-400 font-medium text-sm"
        >
          Usercard
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
