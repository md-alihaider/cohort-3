import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Products
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get("https://fakestoreapi.com/products");

      setProducts(response.data);
    } catch (err) {
      setError("Failed to load products.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Categories
  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  // Featured Products (First 4)
  const featuredProducts = useMemo(() => {
    return products.slice(0, 4);
  }, [products]);

  // Top Rated Products
  const topRatedProducts = useMemo(() => {
    return [...products]
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 4);
  }, [products]);

  const value = {
    products,
    loading,
    error,
    categories,
    featuredProducts,
    topRatedProducts,
    fetchProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
