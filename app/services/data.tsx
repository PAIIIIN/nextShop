import axios from "axios";

export const getProducts = async () => {
  const data = await axios.get("https://fakestoreapi.com/products");
  return data.data;
};
