import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const ProductPage = () => {
  const [productsData, setProductsData] = useState([])  
  console.log(productsData)
  const [isLoading, setIsLoading] = useState(true);
  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data)
      setIsLoading(false)
    } catch (error) {
      console.log("Error in products api", error)
    }
  }
  useEffect(() => {
    getProductsData()
  }, [])
  if (isLoading) return <h1 className=" text-3xl">Loading product..</h1>;
  return (
    <div className="grid grid-cols-4 gap-6">
      {productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
}

export default ProductPage