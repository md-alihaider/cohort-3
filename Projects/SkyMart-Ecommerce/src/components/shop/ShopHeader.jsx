const ShopHeader = ({ totalProducts }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-white">All Products</h1>

      <p className="mt-2 text-zinc-400">{totalProducts} products found</p>
    </div>
  );
};

export default ShopHeader;
