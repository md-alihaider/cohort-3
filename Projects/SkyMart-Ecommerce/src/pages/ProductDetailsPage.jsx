import { useContext } from "react";
import { useParams } from "react-router";

import { ProductContext } from "../context/ProductContext";

import ProductBreadcrumb from "../components/product/ProductBreadcrumb";
import ProductImage from "../components/product/ProductImage";
import ProductInfo from "../components/product/ProductInfo";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { products, loading } = useContext(ProductContext);

  const product = products.find((item) => item.id === Number(id));

  if (loading) {
    return <p className="py-20 text-center text-white">Loading...</p>;
  }

  if (!product) {
    return <p className="py-20 text-center text-red-500">Product not found.</p>;
  }

  return (
    <div className="py-10">
      <ProductBreadcrumb product={product} />

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <ProductImage product={product} />

        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
