import { Trash2 } from "lucide-react";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import QuantityControl from "./QuantityControl";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-3">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="line-clamp-2 text-base font-semibold text-white">
              {item.title}
            </h3>

            <h4 className="mt-2 text-2xl font-bold text-primary">
              ${(item.price * item.quantity).toFixed(2)}
            </h4>

            <p className="text-sm text-zinc-500">
              ${item.price.toFixed(2)} each
            </p>
          </div>

          {/* Bottom Row */}
          <div className="mt-4 flex items-center justify-between">
            <QuantityControl item={item} />

            <button
              onClick={() => removeFromCart(item.id)}
              className="rounded-lg p-2 text-red-500 transition hover:bg-red-500/10 hover:text-red-400"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
