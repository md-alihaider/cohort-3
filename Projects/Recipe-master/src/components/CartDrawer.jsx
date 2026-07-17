function CartDrawer({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close cart drawer"
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <aside className="absolute right-0 top-0 flex h-screen w-full flex-col bg-stone-50 shadow-2xl sm:w-96">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 bg-white p-5">
          <h2 className="text-2xl font-bold text-stone-800">Your Cart</h2>

          <button
            type="button"
            onClick={onClose}
            className="text-3xl font-bold text-stone-500 transition hover:text-orange-600"
            aria-label="Close cart drawer"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 space-y-5 overflow-y-auto p-5">
          <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
                alt=""
                className="h-20 w-20 rounded-xl object-cover"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-stone-800">
                    Salmon Zen Bowl
                  </h3>

                  <span className="font-bold text-orange-600">$32</span>
                </div>

                <p className="text-sm text-stone-500">Chef Elena</p>

                {/* Quantity */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center rounded-lg border border-orange-200 bg-orange-50">
                    <button
                      className="px-3 py-1 text-orange-600 transition hover:bg-orange-100"
                      type="button"
                    >
                      -
                    </button>

                    <span className="px-4 font-medium text-stone-800">2</span>

                    <button
                      className="px-3 py-1 text-orange-600 transition hover:bg-orange-100"
                      type="button"
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="font-medium text-red-500 transition hover:text-red-600"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 bg-white p-5">
          <div className="mb-4 flex justify-between text-lg">
            <span className="text-stone-600">Total</span>

            <span className="font-bold text-2xl text-orange-600">$64</span>
          </div>

          <button
            className="w-full rounded-xl bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700"
            type="button"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}

export default CartDrawer;
