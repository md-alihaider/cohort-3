import axios from "axios";

export const getUsers = async () => {
  console.log("user api function running...")
  let res = await axios.get("https://fakestoreapi.com/users");
  console.log(res.data);
};
