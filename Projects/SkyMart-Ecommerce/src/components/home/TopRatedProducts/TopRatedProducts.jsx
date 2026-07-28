import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

import ProductCard from "../../product/ProductCard";
import SectionHeader from "../FeaturedProducts/SectionHeader";

const TopRatedProducts = () => {
  const { topRatedProducts } = useContext(ProductContext);

  return (
    <section className="mt-20">
      <SectionHeader
        badge="Top Rated"
        title="Top Rated Products"
        description="Customer favorites with the highest ratings and reviews."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {topRatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TopRatedProducts;
