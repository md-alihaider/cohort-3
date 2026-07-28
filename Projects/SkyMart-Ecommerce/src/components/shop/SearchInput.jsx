import { Search } from "lucide-react";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="relative flex-1">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search products..."
        className="h-12 w-full rounded-xl border border-zinc-700 bg-card pl-11 pr-4 text-white outline-none transition focus:border-primary"
      />
    </div>
  );
};

export default SearchInput;
