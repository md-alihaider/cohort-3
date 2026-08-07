import axios from "axios";

export const getAllProducts = async (limit, pageParams = 1) => {
  try {
    let res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${pageParams}`,
    );
    return res.data;
  } catch (error) {
    console.log("Error in api", error);
  }
};
