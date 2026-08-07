import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProducts } from "./api/productApi";

const Infinite = () => {
  const limit = 10;
  const { data, isPending } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      let loadedData = lastPage * 10;
      return loadedData;
    },
  });

  if (isPending) return "Loading...";
  console.log(data);

  return (
    <div className="flex flex-col p-2 gap-6 items-center text-white bg-black">
      <div className=" w-full p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        Product list goes here
      </div>
    </div>
  );
};

export default Infinite;
