import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import ProductCard from "./components/ProductCard";

type Props = {};

const App = (props: Props) => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log(res);
    setProductsData(res.data)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-6 p-6 bg-black sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;
