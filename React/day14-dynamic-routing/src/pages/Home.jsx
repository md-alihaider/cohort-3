import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MyStore } from "../context/MyContext";
import ProductsCard from "../components/ProductsCard";

const Home = () => {
  const { productsData, setProductsData } = useContext(MyStore);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Error in api calling", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return <div className="p-2 grid grid-cols-4 gap-4">
    {
      productsData.map((val) => {
        return <ProductsCard key={val.id} product={val}/>
      })
    }
  </div>;
};

export default Home;
