import { Link, NavLink } from "react-router";
import { ShoppingCart, LogOut, Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0B0B0B]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
              <Zap
                size={16}
                strokeWidth={3}
                className="fill-black text-black"
              />
            </div>

            <h1 className="text-2xl font-bold">
              Sky<span className="text-primary">Mart</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-sm font-bold text-black">
              A
            </div>

            <span className="text-white text-sm">Ali Haider</span>
          </div>

          <button className="w-9 h-9 rounded-xl border border-zinc-800 flex items-center justify-center text-white hover:border-lime-400 transition">
            <ShoppingCart size={20} />
          </button>

          <button className="w-9 h-9 rounded-xl border border-zinc-800 flex items-center justify-center text-white hover:border-red-500 transition">
            <LogOut size={20} />
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 hover:border-primary transition">
            <ShoppingCart size={18} />
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 hover:border-red-500 transition">
            <LogOut size={18} />
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 hover:border-primary transition"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-zinc-800 bg-card lg:hidden">
          <nav className="flex flex-col py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `mx-3 rounded-lg px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
