import React from "react";
import { CheckSquare } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-linear-to-r from-blue-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg">
            <CheckSquare className="text-blue-600" size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">Redux Todo</h1>

            <p className="text-blue-100 text-sm">
              Learn Redux Toolkit by Building
            </p>
          </div>
        </div>

        {/* Right Badge */}
        <div className="hidden md:block">
          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
            Mini Hackathon 🚀
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
