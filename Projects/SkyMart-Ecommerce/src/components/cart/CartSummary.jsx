import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutButton from "./CheckoutButton";

const CartSummary = () => {
  const { totalItems, totalPrice, clearCart } = useContext(CartContext);

  return (
    <div className="border-t border-zinc-800 bg-zinc-950 p-6">
      <h3 className="mb-5 text-xl font-bold text-white">Order Summary</h3>

      <div className="space-y-3">
        <div className="flex justify-between text-zinc-400">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between text-zinc-400">
          <span>Shipping</span>
          <span className="text-green-400">Free</span>
        </div>

        <div className="border-t border-zinc-800 pt-3">
          <div className="flex justify-between text-xl font-bold text-white">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <CheckoutButton />
      </div>

      <button
        onClick={clearCart}
        className="mt-4 w-full rounded-xl border border-red-500 py-3 font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartSummary;
