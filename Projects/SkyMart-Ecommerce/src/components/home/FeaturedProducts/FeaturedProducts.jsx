import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

import ProductCard from "../../product/ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import SectionHeader from "./SectionHeader";

const FeaturedProducts = () => {
  const { featuredProducts, loading } = useContext(ProductContext);

  return (
    <section className="mt-20">
      <SectionHeader
        badge="Featured"
        title="Featured Products"
        description="Hand-picked products selected for their quality, popularity, and value."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

