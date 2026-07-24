import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [scrollY, setScrollY] = useState(null);

  let throttle = false;
  const getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res.data);
  };

  const filteredData = () => {
    console.log("filter running...");
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductsData(result);
  };

  //debouncing
  useEffect(() => {
    if (!searchData) return;
    let timeout = setTimeout(() => {
      filteredData();
    }, 700);

    return () => clearTimeout(timeout);
  }, [searchData]);

  useEffect(() => {
    
    let handleScroll = () => {
      if (throttle) return;
      throttle = true;
      console.log("scroll trigered...");
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="p-2">
      <h1>Debouncing..</h1>
      <input
        className="px-3 py-4"
        type="text"
        placeholder="search products.."
        onChange={(e) => setSearchData(e.target.value)}
      />
      {productsData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
