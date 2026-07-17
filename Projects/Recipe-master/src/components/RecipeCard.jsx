function RecipeCard({ recipe }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm transition duration-300 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-60 overflow-hidden">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-110"
        />

        <span className="absolute right-4 top-4 rounded-full bg-orange-600 px-3 py-1 font-semibold text-white shadow-lg">
          ${recipe.price}
        </span>

      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-5">

        {/* Title */}
        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-stone-800">
            {recipe.name}
          </h2>

          <span className="font-semibold text-amber-500">
            ⭐ {recipe.rating}
          </span>

        </div>

        {/* Description */}
        <p className="text-stone-500">
          {recipe.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">

          <div>

            <h4 className="font-semibold text-stone-700">
              {recipe.chef}
            </h4>

            <p className="text-sm text-stone-500">
              ⏱ {recipe.time}
            </p>

          </div>

          <button className="rounded-xl bg-orange-600 px-5 py-2 font-medium text-white shadow-sm transition hover:bg-orange-700">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default RecipeCard;