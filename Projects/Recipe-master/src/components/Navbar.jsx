import { ShoppingCart, Search } from "lucide-react";

function Navbar({ onCartClick }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex cursor-pointer items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100">
            <span className="text-2xl">🍽️</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-orange-600">RecipeHub</h1>

            <p className="text-xs text-stone-500">Discover Great Recipes</p>
          </div>
        </div>

        {/* Search */}
        <div className="mx-10 hidden max-w-lg flex-1 md:flex">
          <div className="relative w-full">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
            />

            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full rounded-full border border-stone-200 bg-white py-3 pl-12 pr-4 text-stone-700 placeholder:text-stone-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <button
            type="button"
            onClick={onCartClick}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm transition hover:bg-orange-50 hover:text-orange-600"
          >
            <ShoppingCart size={23} className="text-stone-700" />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-xs font-semibold text-white shadow">
              3
            </span>
          </button>

          {/* Profile */}
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="h-11 w-11 rounded-full border-2 border-orange-200 object-cover shadow-sm"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
