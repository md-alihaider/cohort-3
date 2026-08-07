import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const limit = 10;
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);
  console.log(products);
  const getAllProducts = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`,
      );
      setProducts(res.data);
    } catch (error) {
      console.log("Error in api", error);
    }
  };

  const totalPages = Math.ceil(products?.total / limit);

  useEffect(() => {
    getAllProducts();
  }, [page]);
  return (
    <div className="flex flex-col gap-6 items-center bg-black">
      <div className=" w-full p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-6 p-2">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all duration-200 text-white font-semibold shadow-lg"
        >
          ← Prev
        </button>

        <div className="px-8 py-3 rounded-xl bg-zinc-900 border border-zinc-700">
          <p className="text-2xl font-bold text-white">
            Page {page + 1} of {totalPages}{" "}
          </p>
        </div>

        <button
          disabled={page >= totalPages - 1}
          onClick={() => setPage(page + 1)}
          className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all duration-200 text-white font-semibold shadow-lg"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default App;
