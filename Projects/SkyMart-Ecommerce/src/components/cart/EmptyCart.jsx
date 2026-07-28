import { PackageOpen } from "lucide-react";
import { Link } from "react-router";

const EmptyCart = ({ onClose }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <PackageOpen size={60} className="text-zinc-500" />
      </div>

      <h3 className="mt-8 text-3xl font-bold text-white">Cart is empty</h3>

      <p className="mt-3 max-w-xs text-zinc-400">
        Looks like your cart is empty.
        <br />
        Start exploring our products.
      </p>

      <Link
        to="/shop"
        onClick={onClose}
        className="mt-8 rounded-2xl bg-primary px-8 py-4 font-semibold text-black transition hover:opacity-90"
      >
        Browse Products
      </Link>
    </div>
  );
};

export default EmptyCart;
