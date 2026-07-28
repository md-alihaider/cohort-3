const ProductImage = ({ product }) => {
  return (
    <div className="rounded-3xl bg-white p-10">
      <img
        src={product.image}
        alt={product.title}
        className="mx-auto h-105 object-contain"
      />
    </div>
  );
};

export default ProductImage;
