import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const toggleWishlist = (product) => {
    const exists = wishlistItems.find((item) => item.id === product.id);

    if (exists) {
      setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));

      toast.info("💔 Removed from wishlist");
    } else {
      setWishlistItems((prev) => [...prev, product]);

      toast.success("❤️ Added to wishlist");
    }
  };

  const isWishlisted = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
