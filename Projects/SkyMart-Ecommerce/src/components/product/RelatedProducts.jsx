import ProductCard from "./ProductCard";

const RelatedProducts = ({ products, currentProduct }) => {
  const related = products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item.id !== currentProduct.id,
    )
    .slice(0, 4);

  if (!related.length) return null;

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold text-white">Related Products</h2>

      <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
