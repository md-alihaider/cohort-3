import React from 'react'

const ProductCard = ({ title, price, description, image }) => {
  return (
    <div className="max-w-sm bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Optional: 'Sale' or 'New' Badge */}
        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
          Sale
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-5 line-clamp-2">
          {description}
        </p>

        {/* Price and Action Button */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-extrabold text-gray-900">
            ${price}
          </span>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard