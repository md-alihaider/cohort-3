import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";

function RecipeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setformData } = useContext(recipeContext);

  const submitHandler = (data) => {
    setformData(data);
  };

  return (
    <aside className="w-full lg:w-[35%]">
      <div className="sticky top-28 rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-lg">
        <h2 className="mb-2 text-3xl font-bold text-stone-800">
          Add New Recipe
        </h2>

        <p className="mb-6 text-stone-500">
          Share your delicious recipe with everyone.
        </p>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Recipe Name */}
          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Recipe Name
            </label>

            <input
              type="text"
              placeholder="Recipe Name"
              {...register("recipeName", {
                required: {
                  value: true,
                  message: "Input is required",
                },
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              })}
              className="w-full rounded-xl border border-stone-300 bg-white p-3 text-stone-700 placeholder:text-stone-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />

            {errors.recipeName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.recipeName.message}
              </p>
            )}
          </div>

          {/* Chef Name */}
          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Chef Name
            </label>

            <input
              type="text"
              placeholder="Chef Name"
              {...register("ChefName")}
              className="w-full rounded-xl border border-stone-300 bg-white p-3 text-stone-700 placeholder:text-stone-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Price + Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block font-medium text-stone-700">
                Price
              </label>

              <input
                type="number"
                placeholder="Price"
                {...register("Price")}
                className="w-full rounded-xl border border-stone-300 bg-white p-3 text-stone-700 placeholder:text-stone-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-stone-700">
                Prep Time
              </label>

              <input
                type="text"
                placeholder="30 mins"
                {...register("prepTime")}
                className="w-full rounded-xl border border-stone-300 bg-white p-3 text-stone-700 placeholder:text-stone-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Image URL
            </label>

            <input
              type="text"
              placeholder="Paste Image URL"
              {...register("imageUrl")}
              className="w-full rounded-xl border border-stone-300 bg-white p-3 text-stone-700 placeholder:text-stone-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Description..."
              {...register("description")}
              className="w-full resize-none rounded-xl border border-stone-300 bg-white p-3 text-stone-700 placeholder:text-stone-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-600 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-700"
          >
            Create Recipe
          </button>
        </form>
      </div>
    </aside>
  );
}

export default RecipeForm;
