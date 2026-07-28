import { ShoppingBag, X } from "lucide-react";

const CartHeader = ({ totalItems, onClose }) => {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 p-6">
      <div className="flex items-center gap-3">
        <ShoppingBag size={24} className="text-primary" />

        <h2 className="text-3xl font-bold text-white">Cart</h2>

        {totalItems > 0 && (
          <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
            {totalItems} {totalItems === 1 ? "Item" : "Items"}
          </span>
        )}
      </div>

      <button
        onClick={onClose}
        className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
      >
        <X size={22} />
      </button>
    </header>
  );
};

export default CartHeader;
