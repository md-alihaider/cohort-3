import React from "react";
import { Search, Filter } from "lucide-react";
import { useProductApi } from "../hooks/productHooks";

const Filters = () => {
  const { filterProducts } = useProductApi();
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col lg:flex-row gap-5 items-center justify-between shadow-lg">
      {/* Search */}
      <div className="relative w-full lg:flex-1">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
        />

        <input
          onChange={(e)=> filterProducts(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 transition"
        />
      </div>

      {/* Category */}
      <div className="flex items-center gap-3 w-full lg:w-auto">
        <div className="flex items-center gap-2 text-zinc-300 whitespace-nowrap">
          <Filter size={18} />
          <span>Category</span>
        </div>

        <select className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition cursor-pointer">
          <option value="">All</option>
          <option value="beauty">Beauty</option>
          <option value="groceries">Groceries</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>

      {/* Search Button */}
      <button className="w-full lg:w-auto bg-lime-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-lime-300 transition">
        Search
      </button>
    </div>
  );
};

export default Filters;
