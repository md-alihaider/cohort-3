import React, { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:border-lime-400 transition-all duration-300">
      {/* Image */}
      <div className="bg-zinc-800 h-60 flex items-center justify-center p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-44 object-contain hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h2 className="text-white text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-lime-400">
            ${product.price}
          </span>

          <span className="text-sm text-zinc-400">Stock: {product.stock}</span>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between">
          <span className="text-zinc-300 font-medium">Quantity</span>

          <div className="flex items-center bg-zinc-800 rounded-lg border border-zinc-700">
            <button
              onClick={decrease}
              className="p-2 hover:bg-zinc-700 transition"
            >
              <Minus size={16} className="text-white" />
            </button>

            <span className="w-10 text-center text-white font-medium">
              {quantity}
            </span>

            <button
              onClick={increase}
              className="p-2 hover:bg-zinc-700 transition"
            >
              <Plus size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <button className="w-full flex items-center justify-center gap-2 bg-lime-400 text-black font-semibold py-3 rounded-xl hover:bg-lime-300 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
