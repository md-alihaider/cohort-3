import { Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const QuantityControl = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => decreaseQuantity(item.id)}
        className="rounded-lg border border-zinc-700 p-2 transition hover:border-primary"
      >
        <Minus size={16} className="text-white" />
      </button>

      <span className="w-5 text-center font-semibold text-white">
        {item.quantity}
      </span>

      <button
        onClick={() => increaseQuantity(item.id)}
        className="rounded-lg border border-zinc-700 p-2 transition hover:border-primary"
      >
        <Plus size={16} className="text-white" />
      </button>
    </div>
  );
};

export default QuantityControl;
