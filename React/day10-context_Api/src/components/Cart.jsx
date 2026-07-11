import React from "react";
import { Star, ShoppingCart, Trash2 } from "lucide-react";

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart className="text-indigo-600" size={32} />

            <h1 className="text-3xl font-bold text-slate-800">Shopping Cart</h1>

            <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-indigo-600 px-3 text-sm font-semibold text-white">
              {cartItems.length}
            </span>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex h-[60vh] flex-col items-center justify-center rounded-2xl bg-white shadow">
            <ShoppingCart size={70} className="mb-4 text-slate-300" />
            <h2 className="text-2xl font-semibold text-slate-700">
              Your cart is empty
            </h2>
            <p className="mt-2 text-slate-500">
              Add some products to get started.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Products */}
            <div className="space-y-5 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow transition hover:shadow-lg sm:flex-row"
                >
                  <div className="flex h-36 w-full items-center justify-center rounded-xl bg-slate-100 p-4 sm:w-36">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h2 className="line-clamp-2 text-lg font-semibold text-slate-800">
                        {item.title}
                      </h2>

                      <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                        {item.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <Star
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="font-medium">{item.rating.rate}</span>

                        <span className="text-slate-400">
                          ({item.rating.count} reviews)
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-2xl font-bold text-indigo-600">
                        ${item.price}
                      </span>

                      <button className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-red-600 transition hover:bg-red-50">
                        <Trash2 size={18} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="sticky top-6 h-fit rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-slate-700">
                  <span>Items</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="flex justify-between text-slate-700">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-700">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>

                <hr className="border-slate-200" />

                <div className="flex justify-between text-2xl font-bold text-slate-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button className="mt-6 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
