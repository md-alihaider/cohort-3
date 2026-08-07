import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-lime-400 transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="bg-zinc-950 p-6 flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-4">
        <div>
          <p className="text-sm text-lime-400 uppercase tracking-wide">
            {product.category}
          </p>

          <h2 className="text-lg font-semibold text-white line-clamp-2">
            {product.title}
          </h2>

          <p className="text-sm text-zinc-400">{product.brand}</p>
        </div>

        {/* Price & Rating */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            ${product.price}
          </span>

          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={16} fill="currentColor" />
            <span className="text-sm text-white">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Stock */}
        <span
          className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
            product.stock > 0
              ? "bg-lime-500/20 text-lime-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>

        {/* Button */}
        <button
          className="w-full flex items-center justify-center gap-2 bg-lime-400 text-black py-3 rounded-xl font-semibold hover:brightness-110 transition disabled:bg-zinc-700 disabled:text-zinc-400 disabled:cursor-not-allowed"
          disabled={product.stock === 0}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
