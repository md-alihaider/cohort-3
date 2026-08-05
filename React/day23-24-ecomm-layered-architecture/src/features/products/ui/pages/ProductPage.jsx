import React from "react";
import { useAllProduct } from "../../hooks/useProductHooks";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

const ProductPage = () => {
  const { data, isPending, error,search,setSearch } = useAllProduct();
  console.log(search)
  if(isPending)return <h1>Products loading....</h1>
  return (
    <div>
      <FilterBar search={search} setSearch={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
