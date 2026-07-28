const CategorySelect = ({ categories, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="h-12 rounded-xl border border-zinc-700 bg-card px-4 text-white outline-none focus:border-primary"
    >
      <option value="all">All Categories</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
