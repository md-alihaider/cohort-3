import React, { useContext } from "react";
import { Star, ShoppingCart, Heart, Minus, Plus } from "lucide-react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  let { setCartItems, incrementQuantity, decrementQuantity } =
    useContext(MyStore);

  const addToCart = () => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    alert("Product added to cart");
  };

  const cartFlush = () => {
    if (isInCart.quantity > 1) {
      decrementQuantity(product.id);
    } else {
      setCartItems((prev) => prev.filter((item) => item.id !== product.id));
    }
  };
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-slate-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition duration-300 group-hover:scale-110"
        />

        {/* Wishlist */}
        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow transition hover:bg-red-50">
          <Heart
            size={20}
            className="text-slate-500 transition hover:fill-red-500 hover:text-red-500"
          />
        </button>

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <h2 className="line-clamp-2 text-xl font-semibold text-slate-800">
          {product.title}
        </h2>

        <p className="line-clamp-3 text-sm leading-6 text-slate-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-lg bg-yellow-100 px-2 py-1">
              <Star
                size={16}
                className="mr-1 fill-yellow-400 text-yellow-400"
              />
              <span className="text-sm font-semibold">
                {product.rating.rate}
              </span>
            </div>

            <span className="text-sm text-slate-500">
              ({product.rating.count} reviews)
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-3xl font-bold text-indigo-600">
              ${product.price}
            </p>
          </div>

          {isInCart ? (
            <div className="flex items-center rounded-xl border">
              <button
                onClick={cartFlush}
                className="p-3 hover:bg-slate-100"
              >
                <Minus size={18} />
              </button>

              <span className="w-12 text-center text-lg font-semibold">
                {isInCart.quantity || 1}
              </span>

              <button
                onClick={() => incrementQuantity(product.id)}
                className="p-3 hover:bg-slate-100"
              >
                <Plus size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={addToCart}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-700 active:scale-95"
            >
              <ShoppingCart size={18} />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
