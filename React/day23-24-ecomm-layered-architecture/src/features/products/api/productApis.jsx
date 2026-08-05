import { api } from "../../../config/api";

export const getAllProductApi = async () => {
  try {
    const res = await api.get("/products");
    return res.data;
  } catch (error) {
    console.log("Error in getting all products api", error);
  }
};
