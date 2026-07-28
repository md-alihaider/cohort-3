import { ArrowRight } from "lucide-react";

const CheckoutButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-lg font-semibold text-black transition hover:opacity-90 active:scale-[0.98]"
    >
      Checkout
      <ArrowRight size={20} />
    </button>
  );
};

export default CheckoutButton;
