export default function ProductCard({ id, deleteUser, setUpdatedData, setIsModalOpen }) {
  return (
    <div className="max-w-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden transition-colors duration-200">
      {/* Product Image Placeholder */}
      <div className="h-48 bg-gray-200 dark:bg-gray-700 w-full flex items-center justify-center text-gray-500 dark:text-gray-400">
        <span>[Product Image]</span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
          Wireless Headphones
        </h3>
        <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          $99.99
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-5">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Quantity:
          </span>
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
            <button className="px-3 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              −
            </button>
            <span className="px-3 py-1 font-medium text-gray-900 dark:text-white border-l border-r border-gray-300 dark:border-gray-600">
              1
            </span>
            <button className="px-3 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 mt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            Add to Cart
          </button>

          <div className="flex gap-2">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors">
              Edit
            </button>
            <button className="flex-1 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 font-medium py-2 px-4 rounded-lg transition-colors">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
