import React, { useContext } from "react";
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from "lucide-react";
import { MyStore } from "../context/MyContext";

const Cart = () => {
  let { cartItems } = useContext(MyStore);
  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0,
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
        <ShoppingCart size={80} className="text-slate-300" />

        <h2 className="mt-6 text-3xl font-bold text-slate-700">
          Your Cart is Empty
        </h2>

        <p className="mt-2 text-slate-500">
          Add some products to start shopping.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-8 flex items-center gap-4">
          <ShoppingCart className="text-indigo-600" size={34} />

          <h1 className="text-4xl font-bold text-slate-800">Shopping Cart</h1>

          <span className="rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
            {totalItems}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_380px]">
          {/* Left */}

          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-40 w-40 items-center justify-center rounded-xl bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-32 object-contain"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
                      {item.category}
                    </span>

                    <h2 className="mt-3 text-xl font-semibold text-slate-800">
                      {item.title}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <h3 className="text-3xl font-bold text-indigo-600">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </h3>

                    <div className="flex items-center gap-6">
                      {/* Quantity */}

                      <div className="flex items-center rounded-xl border">
                        <button className="p-3 hover:bg-slate-100">
                          <Minus size={18} />
                        </button>

                        <span className="w-12 text-center text-lg font-semibold">
                          {item.quantity || 1}
                        </span>

                        <button className="p-3 hover:bg-slate-100">
                          <Plus size={18} />
                        </button>
                      </div>

                      {/* Remove */}

                      <button className="rounded-xl border border-red-300 px-4 py-3 text-red-500 transition hover:bg-red-50">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right */}

          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-3xl font-bold text-slate-800">
              Order Summary
            </h2>

            <div className="space-y-5">
              <div className="flex justify-between text-slate-600">
                <span>Total Items</span>

                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>

                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>

                <span className="font-semibold text-green-600">Free</span>
              </div>

              <hr />

              <div className="flex justify-between text-2xl font-bold text-slate-800">
                <span>Total</span>

                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button className="mt-4 w-full rounded-xl bg-indigo-600 py-4 text-lg font-semibold text-white transition hover:bg-indigo-700">
                Proceed to Checkout
              </button>

              <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border py-3 font-medium hover:bg-slate-100">
                <ArrowLeft size={18} />
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
