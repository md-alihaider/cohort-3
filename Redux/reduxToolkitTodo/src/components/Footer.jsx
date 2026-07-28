import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <p>© 2026 Redux Todo Dashboard</p>

        <div className="flex items-center gap-2">
          <span>Made with</span>
          <Heart size={16} className="text-red-500 fill-red-500" />
          <span>using React & Redux Toolkit</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
