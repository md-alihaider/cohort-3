import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

// Passed updatedData as a prop so it doesn't throw a ReferenceError
export default function AddProductForm({ setUsers, setIsModalOpen, users, updatedData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: updatedData || {},
    mode: "onChange",
  });

  const formSubmit = (data) => {
    console.log("Form Submitted Successfully:", data);
    // Add your API call or state update logic here
    if (updatedData) {
      setUsers((prev) => {
        const newUser = prev.map((val) => {
          return val.id === updatedData.id
            ? { ...data, id: updatedData.id }
            : val;
        });
        localStorage.setItem("users", JSON.stringify(newUser));
        return newUser;
      });
    } else {
      let userArr = [...users, { ...data, id: nanoid() }];
      setUsers(userArr);
      localStorage.setItem("users", JSON.stringify(userArr));
    }
    reset();
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-5">
        {/* Product Image Upload Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Product Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600 dark:text-gray-400 justify-center">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-transparent rounded-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    type="file"
                    className="sr-only"
                    {...register("image", {
                      required: "Product image is required",
                    })}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
          {/* Moved image error message here so it doesn't break the flexbox layout inside the dashed box */}
          {errors.image && (
            <p className="text-red-500 text-xs mt-2">{errors.image.message}</p>
          )}
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="e.g. Wireless Headphones"
            className={`w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.productName
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            }`}
            {...register("productName", {
              required: "Product name is required",
            })}
          />
          {errors.productName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.productName.message}
            </p>
          )}
        </div>

        {/* Price & Initial Stock */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Price ($)
            </label>
            <input
              type="number"
              placeholder="99.99"
              step="0.01"
              className={`w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.price
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true, // Converts string input to a float automatically
                min: { value: 0.01, message: "Price must be greater than 0" },
              })}
            />
            {errors.price && (
              <p className="text-red-500 text-xs mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Initial Quantity
            </label>
            <input
              type="number"
              placeholder="1"
              className={`w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.quantity
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
              {...register("quantity", {
                required: "Quantity is required",
                valueAsNumber: true, // Converts string input to an integer automatically
                min: { value: 1, message: "At least 1 item is required" },
              })}
            />
            {errors.quantity && (
              <p className="text-red-500 text-xs mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit" // CHANGED: Must be "submit", not "button", to trigger handleSubmit
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-sm"
        >
          Add Product to Catalog
        </button>
      </form>
    </div>
  );
}
