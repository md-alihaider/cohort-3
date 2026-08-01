import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/productApi";
import { useEffect, useState } from "react";

export const useProductApi = () => {
  const [filteredProduct, setFilteredProduct] = useState(null)
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
    staleTime: 5000,
  });

  const filterProducts = (searchParams) => {
    const filteredData = data.filter((val) =>
      val.title.toLowerCase().includes(searchParams.toLowerCase()),
    );
    if (filteredData) {
      setFilteredProduct(filteredData);
    }
    console.log(filteredData)
  };

  useEffect(() => {
    setFilteredProduct(data);
  },[data])

  return {
    isPending,
    data,
    error,
    filterProducts,
    filteredProduct
  };
};
