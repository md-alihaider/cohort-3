import { axiosInstance } from "../config/axiosInstance";

export const getProductsDataApi = async () => {
  try {
    console.log("api call function running...")
    const res = await axiosInstance("/products");
    return res.data.products;
  } catch (error) {
    console.log("Error in products api", error);
  }
};
