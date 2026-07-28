import { useContext } from "react";
import { useParams } from "react-router";

import { ProductContext } from "../context/ProductContext";

import ProductBreadcrumb from "../components/product/ProductBreadcrumb";
import ProductImage from "../components/product/ProductImage";
import ProductInfo from "../components/product/ProductInfo";

import ProductFeatures from "../components/product/ProductFeatures";
import ProductNavigation from "../components/product/ProductNavigation";
import RelatedProducts from "../components/product/RelatedProducts";

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

        <div>
          <ProductInfo product={product} />
          <ProductFeatures />
          <ProductNavigation id={product.id} totalProducts={products.length} />
        </div>
      </div>

      <RelatedProducts products={products} currentProduct={product} />
    </div>
  );
};

export default ProductDetailsPage;
