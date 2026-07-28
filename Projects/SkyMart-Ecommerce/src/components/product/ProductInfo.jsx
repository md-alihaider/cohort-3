import { Heart, ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

const ProductInfo = ({ product }) => {
  const { addToCart, increaseQuantity, decreaseQuantity, getCartItem } =
    useContext(CartContext);
  const { toggleWishlist, isWishlisted } = useContext(WishlistContext);

  const cartItem = getCartItem(product.id);
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
        {cartItem ? (
          <div className="flex h-11 w-full items-center justify-between rounded-xl border border-zinc-700 bg-zinc-900 px-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-white transition hover:bg-primary hover:text-black"
              >
                −
              </button>

              <span className="w-6 text-center font-bold text-white">
                {cartItem.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(product.id)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-white transition hover:bg-primary hover:text-black"
              >
                +
              </button>
            </div>

            <span className="text-sm font-medium text-green-400">✓ Added</span>
          </div>
        ) : (
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
        )}

        <button
          onClick={() => toggleWishlist(product)}
          className="rounded-lg border p-3"
        >
          <Heart
            className={
              isWishlisted(product.id) ? "fill-red-500 text-red-500" : ""
            }
          />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
