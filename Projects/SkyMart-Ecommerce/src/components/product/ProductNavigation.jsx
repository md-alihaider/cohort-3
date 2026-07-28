import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

const ProductNavigation = ({ id, totalProducts }) => {
  const navigate = useNavigate();

  const previous = () => {
    if (id > 1) {
      navigate(`/product/${id - 1}`);
    }
  };

  const next = () => {
    if (id < totalProducts) {
      navigate(`/product/${id + 1}`);
    }
  };

  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      <button
        onClick={previous}
        disabled={id === 1}
        className="flex items-center justify-center gap-2 rounded-2xl border border-zinc-700 py-4 text-white transition hover:border-primary disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      <button
        onClick={next}
        disabled={id === totalProducts}
        className="flex items-center justify-center gap-2 rounded-2xl bg-primary py-4 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default ProductNavigation;
