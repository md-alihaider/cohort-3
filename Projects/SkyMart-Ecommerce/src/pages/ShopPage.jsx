import { useContext, useEffect, useMemo, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ShopToolbar from "../components/shop/ShopToolbar";
import ShopHeader from "../components/shop/ShopHeader";
import ProductGrid from "../components/shop/ProductGrid";

const ShopPage = () => {
  const { products, categories, loading } = useContext(ProductContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [visibleProducts, setVisibleProducts] = useState(10);


  useEffect(() => {
    setVisibleProducts(10);
  }, [search, category, sort]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search
    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category
    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Sort
    switch (sort) {
      case "low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;

      case "az":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;

      default:
        break;
    }

    return filtered;
  }, [products, search, category, sort]);

  const displayedProducts = filteredProducts.slice(0, visibleProducts);
  return (
    <>
      <ShopHeader totalProducts={filteredProducts.length} />

      <ShopToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />
      <ProductGrid products={displayedProducts} loading={loading} />
      {visibleProducts < filteredProducts.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVisibleProducts((prev) => prev + 10)}
            className="rounded-xl bg-primary px-6 py-3 font-semibold text-black transition hover:opacity-90"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default ShopPage;
