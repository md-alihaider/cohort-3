import React from "react";
import {
  useAllProduct,
  useProductByCategory,
} from "../../hooks/useProductHooks";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

const ProductPage = () => {
  const { data, isPending, search, setSearch } = useAllProduct();

  const {
    data: productByCategory,
    category,
    setCategory,
  } = useProductByCategory();

  if (isPending) return <h1>Products loading....</h1>;
  return (
    <div>
      <FilterBar
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productByCategory?.products.length
          ? productByCategory?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductPage;
