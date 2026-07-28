import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, totalItems } = useContext(CartContext);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-zinc-950 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <CartHeader totalItems={totalItems} onClose={onClose} />

        {cartItems.length === 0 ? (
          <EmptyCart onClose={onClose} />
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Summary */}
            <CartSummary />
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
