import ProductCard from "../product/ProductCard";
import ProductSkeleton from "../home/FeaturedProducts/ProductSkeleton";
import EmptyState from "./EmptyState";

const ProductGrid = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
