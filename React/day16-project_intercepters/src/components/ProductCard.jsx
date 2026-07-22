import React from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Wishlist */}
      <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-md transition hover:bg-red-50">
        <Heart
          size={18}
          className="text-gray-500 transition group-hover:text-red-500"
        />
      </button>

      {/* Image */}
      <div className="flex h-72 items-center justify-center bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Details */}
      <div className="space-y-4 p-5">
        {/* Category */}
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-3 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{product.rating.rate}</span>
            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          <span className="text-xs text-gray-400">ID #{product.id}</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-3xl font-bold text-indigo-600">
              ${product.price}
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-white transition hover:bg-indigo-700">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
