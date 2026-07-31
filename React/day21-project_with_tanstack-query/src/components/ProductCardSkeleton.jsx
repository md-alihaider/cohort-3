import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="bg-zinc-800 h-60 flex items-center justify-center p-6">
        <div className="w-40 h-40 rounded-xl bg-zinc-700" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <div className="h-5 w-3/4 bg-zinc-700 rounded" />

        {/* Price & Stock */}
        <div className="flex justify-between items-center">
          <div className="h-7 w-20 bg-zinc-700 rounded" />
          <div className="h-4 w-16 bg-zinc-700 rounded" />
        </div>

        {/* Quantity */}
        <div className="flex justify-between items-center">
          <div className="h-4 w-20 bg-zinc-700 rounded" />

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-zinc-700" />
            <div className="w-8 h-5 rounded bg-zinc-700" />
            <div className="w-8 h-8 rounded bg-zinc-700" />
          </div>
        </div>

        {/* Button */}
        <div className="h-12 rounded-xl bg-zinc-700" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
