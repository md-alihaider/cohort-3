export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      {/* Left: User Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          JD
        </div>
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            John Doe
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Standard User
          </p>
        </div>
      </div>

      {/* Middle: Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right: Theme Toggle & Cart */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button (Logic to be added by you) */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
          aria-label="Toggle Theme"
        >
          {/* Replace with an actual Sun/Moon SVG icon */}
          {isDarkMode ? "☀️" : "🌑"}
        </button>

        {/* Cart Button */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors">
          {/* Replace with a Cart SVG icon */}
          <span>🛒</span>
          {/* Cart Badge (Hardcoded for now) */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
            3
          </span>
        </button>
      </div>
    </nav>
  );
}
