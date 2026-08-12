import type { Product } from "../types";



const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-white p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-2 line-clamp-2 min-h-14 text-lg font-semibold leading-7 text-white">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="font-medium text-white">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-zinc-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-zinc-500">Price</p>
            <p className="text-2xl font-bold text-white">${product.price}</p>
          </div>

          <button
            type="button"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-zinc-200 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
