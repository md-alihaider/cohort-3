import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group  w-80 overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 object-contain transition duration-500 group-hover:scale-110"
        />

        {/* Wishlist */}
        <button className="absolute top-4 right-4 rounded-full bg-white p-2 shadow-lg hover:bg-red-50">
          <Heart
            size={20}
            className="text-gray-500 hover:fill-red-500 hover:text-red-500"
          />
        </button>

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium text-white capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg bg-yellow-100 px-2 py-1">
            <Star size={15} className="fill-yellow-500 text-yellow-500" />
            <span className="ml-1 text-sm font-medium">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating.count} Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2">
          <h3 className="text-3xl font-bold text-slate-900">
            ${product.price}
          </h3>

          <span className="text-sm text-green-600 font-medium">In Stock</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 rounded-xl border-2 border-gray-200 py-3 font-medium transition hover:border-black">
            Details
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800">
            <ShoppingCart size={18} />
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
