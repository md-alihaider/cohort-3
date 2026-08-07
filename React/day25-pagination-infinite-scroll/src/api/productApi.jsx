import axios from "axios";

export const getAllProducts = async () => {
  try {
    let res = await axios.get("https://dummyjson.com/products");
    return res.data;
  } catch (error) {
    console.log("Error in api", error);
  }
};
