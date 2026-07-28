const SortSelect = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="h-12 rounded-xl border border-zinc-700 bg-card px-4 text-white outline-none focus:border-primary"
    >
      <option value="default">Featured</option>

      <option value="low">Price: Low to High</option>

      <option value="high">Price: High to Low</option>

      <option value="rating">Top Rated</option>

      <option value="az">Name (A-Z)</option>
    </select>
  );
};

export default SortSelect;
