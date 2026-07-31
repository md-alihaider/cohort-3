import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { getProductsDataApi } from "../api/productApi";
const ShopPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  const getData = async() => {
    const data = await getProductsDataApi();
    setProductsData(data)
    setIsLoading(false)
  }
  useEffect(() => {
    getData()
  },[])


  return (
    <div>
      <h1>This is a Shop Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ShopPage;
