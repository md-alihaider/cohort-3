import React from "react";
import { Search } from "lucide-react";
import { useAllCategories } from "../../hooks/useProductHooks";

const FilterBar = ({ search, setSearch, category, setCategory }) => {
  let { data, isPending  } = useAllCategories();

  if (isPending) return <h1>Loading categories...</h1>;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
      {/* Search */}
      <div className="relative w-full md:w-95">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 transition"
        />
      </div>

      {/* Category Select */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:w-64 bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-lime-400 transition cursor-pointer"
      >
        <option value="all">All Categories</option>

        {data.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
