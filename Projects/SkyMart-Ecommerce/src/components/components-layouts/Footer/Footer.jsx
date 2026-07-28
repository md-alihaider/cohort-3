import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Brand */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary">SkyMart</h2>

          <p className="mt-3 text-zinc-400">Modern shopping made simple.</p>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-8">
          <Link
            to="/"
            className="text-zinc-400 transition-colors hover:text-primary"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-zinc-400 transition-colors hover:text-primary"
          >
            Shop
          </Link>

          <Link
            to="/about"
            className="text-zinc-400 transition-colors hover:text-primary"
          >
            About
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} SkyMart. All rights reserved.</p>

          <p className="mt-2">
            Built with React, Tailwind CSS & Fake Store API.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
