import { Heart, ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductInfo = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary capitalize">
        {product.category}
      </span>
      <h1 className="mt-5 text-5xl font-bold text-white">{product.title}</h1>

      <div className="mt-6 flex items-center gap-2">
        <Star className="fill-yellow-400 text-yellow-400" size={18} />
        <span className="font-semibold text-white">{product.rating.rate}</span>
        <span className="text-zinc-500">({product.rating.count} reviews)</span>
      </div>

      <div className="my-8 border-y border-zinc-700 py-6">
        <h2 className="text-5xl font-bold text-primary">${product.price}</h2>
      </div>

      <p className="leading-8 text-zinc-400">{product.description}</p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => {
            console.log("Clicked");
            addToCart(product);
          }}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-4 font-semibold text-black"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>

        <button className="rounded-2xl border border-zinc-700 px-5 text-white">
          <Heart />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
