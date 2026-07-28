import SearchInput from "./SearchInput";
import CategorySelect from "./CategorySelect";
import SortSelect from "./SortSelect";

const ShopToolbar = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
}) => {
  return (
    <div className="mb-10 rounded-2xl border border-zinc-700 bg-card p-4">
      <div className="flex flex-col gap-4 lg:flex-row">
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <CategorySelect
          categories={categories}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <SortSelect value={sort} onChange={(e) => setSort(e.target.value)} />
      </div>
    </div>
  );
};

export default ShopToolbar;
