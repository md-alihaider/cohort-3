import { Link, NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, Menu, X, Zap } from "lucide-react";
import { useContext, useState } from "react";
import { Auth } from "/src/context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { loggedInUser, logout } = useContext(Auth);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
  ];

  const initials =
    loggedInUser?.name
      ?.split(" ")
      .map((name) => name[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "?";

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0B0B0B]">
      <div className="mx-auto flex h-16 max-w-300 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Zap size={16} strokeWidth={3} className="fill-black text-black" />
          </div>

          <h1 className="text-2xl font-bold">
            Sky<span className="text-primary">Mart</span>
          </h1>
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
          {/* User Card */}
          <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-bold text-black">
              {initials}
            </div>

            <div className="leading-tight">
              <h3 className="text-sm font-semibold text-white">
                {loggedInUser?.name || "Guest"}
              </h3>

              <p className="text-xs text-zinc-500">
                {loggedInUser?.email || ""}
              </p>
            </div>
          </div>

          {/* Cart */}
          <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 text-white transition hover:border-primary">
            <ShoppingCart size={18} />
          </button>

          {/* Logout */}
          <button
            onClick={logoutHandler}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 text-white transition hover:border-red-500 hover:text-red-400"
          >
            <LogOut size={18} />
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 hover:border-primary transition">
            <ShoppingCart size={18} />
          </button>

          <button
            onClick={logoutHandler}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 hover:border-red-500 transition"
          >
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
        <div className="border-t border-zinc-800 bg-[#151515] lg:hidden">
          {/* Mobile User Card */}
          <div className="mx-3 mt-3 flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-bold text-black">
              {initials}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                {loggedInUser?.fullName || "Guest"}
              </h3>

              <p className="text-xs text-zinc-500">
                {loggedInUser?.email || ""}
              </p>
            </div>
          </div>

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
