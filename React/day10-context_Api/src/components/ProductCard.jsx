import { Star } from "lucide-react";
import { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

export default function ProductCard({ product }) {
  const { setCartItems } = useContext(MyShop)
  return (
    <div className="group max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-3 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full bg-yellow-100 px-2 py-1">
              <Star
                size={16}
                className="mr-1 fill-yellow-500 text-yellow-500"
              />
              <span className="text-sm font-semibold">
                {product.rating.rate}
              </span>
            </div>

            <span className="text-sm text-gray-500">
              ({product.rating.count} Reviews)
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-indigo-600">
              ${product.price}
            </p>
          </div>

          <button
            onClick={() => setCartItems((prev) => [...prev, product])}
            className="rounded-xl bg-indigo-600 px-5 py-2 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
