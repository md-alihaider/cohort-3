import { api } from "../../../config/api";

export const getAllProductApi = async (search) => {
  try {
    const url = search ? `/products/search?q=${search}` : "/products?limit=100";
    const res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log("Error in getting all products api", error);
  }
};

export const getProductsCategories = async () => {
  try {
    const res = await api.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("Error in getting all products api", error);
  }
};

export const getProductByCategory = async (category) => {
  try {
    const res = await api.get(`/products/category/${category}`);
    return res.data;
  } catch (error) {
    console.log("Error in getting all products api", error);
  }
};
