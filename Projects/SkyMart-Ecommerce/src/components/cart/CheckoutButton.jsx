import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../context/CartContext";

const CheckoutButton = ({ onClose }) => {
  const { cartItems, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("🛒 Your cart is empty!");
      return;
    }

    toast.success("🎉 Order placed successfully!");

    clearCart();

    if (onClose) {
      onClose();
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full rounded-xl bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-300"
    >
      Checkout →
    </button>
  );
};

export default CheckoutButton;
