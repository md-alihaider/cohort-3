import { useEffect, useState } from "react";
import AddProductForm from "./components/AddProductForm";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const App = () => {
  // Practice tip: This is where you will eventually add your useState hook
  // to manage the modal (e.g., const [isModalOpen, setIsModalOpen] = useState(false))
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
   if (isDarkMode) {
     document.documentElement.classList.add("dark");
   } else {
     document.documentElement.classList.remove("dark");
   }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 relative">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              Product Catalog
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage your inventory and product listings.
            </p>
          </div>

          {/* Trigger Button: You will add an onClick handler here to open the modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg shadow-sm transition-colors flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Product
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>

      {/* MODAL OVERLAY 
        When you add your logic, you will wrap this entire div in a conditional statement
        so it only renders when your state allows it. 
      */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 dark:bg-black/70 backdrop-blur-sm">
          {/* Modal Container */}
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl custom-scrollbar border border-gray-200 dark:border-gray-700">
            {/* Close Button: You will add an onClick handler here to close the modal */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Notice how we can just drop your existing AddProductForm right inside!
            Since AddProductForm already has its own padding and background, 
            it seamlessly becomes the content of the modal.
          */}
            <AddProductForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
