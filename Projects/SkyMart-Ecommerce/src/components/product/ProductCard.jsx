import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-700 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-white p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain transition duration-500 group-hover:scale-105"
          />

          <button
            onClick={(e) => e.preventDefault()}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-primary"
          >
            <Heart size={17} className="text-black" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3 p-5">
          {/* Category */}
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold capitalize text-primary">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="line-clamp-2 min-h-12 text-base font-semibold text-white">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star size={15} className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-medium text-white">
              {product.rating.rate}
            </span>

            <span className="text-xs text-zinc-500">
              ({product.rating.count})
            </span>
          </div>

          {/* Price */}
          <h2 className="text-2xl font-bold text-primary">${product.price}</h2>
        </div>
      </Link>

      {/* Add to Cart */}
      <div className="px-5 pb-5">
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary font-semibold text-black transition hover:opacity-90"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
