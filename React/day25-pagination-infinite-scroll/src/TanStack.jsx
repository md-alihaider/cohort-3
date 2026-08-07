import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";
import { useState } from "react";

const TanStack = () => {
  const limit = 10;
  const [page, setPage] = useState(0);

  const { data, isPending, isError, isPlaceholderData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getAllProducts(limit, page),
    placeholderData: keepPreviousData,
  });

  if (isPending) return "Loading...";
  if (isError) return "Something went wrong..";
  const totalPages = Math.ceil(data?.total / limit);

  return (
    <div className="flex flex-col p-2 gap-6 items-center text-white bg-black">
      <div
        style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
        className=" w-full p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {data?.products.map((val) => (
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

export default TanStack;
