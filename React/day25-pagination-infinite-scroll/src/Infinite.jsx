import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
  const limit = 40;
  const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage) => {
        console.log(allPage);
        let loadedData = allPage.length * limit;
        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) return "Loading...";
  console.log(data);

  let allProducts = data?.pages?.flatMap((val) => val.products) ?? [];

  return (
    <div className="flex flex-col p-5 gap-6 items-center text-white bg-black">
      <div className=" w-full p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all duration-200 text-white font-semibold shadow-lg"
        >
          {isFetchingNextPage ? "Loading.." : "Load more →"}
        </button>
      )}
    </div>
  );
};

export default Infinite;
