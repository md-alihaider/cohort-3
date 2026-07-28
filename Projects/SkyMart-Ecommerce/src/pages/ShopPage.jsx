import { useContext, useState } from "react";

import { ProductContext } from "../context/ProductContext";
import ShopToolbar from "../components/shop/ShopToolbar";
import ShopHeader from "../components/shop/ShopHeader";


const ShopPage = () => {
  const { products, categories } = useContext(ProductContext);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [sort, setSort] = useState("default");

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <ShopHeader totalProducts={products.length} />

      <ShopToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />
    </div>
  );
};

export default ShopPage;
