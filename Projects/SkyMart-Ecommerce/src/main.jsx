import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";
import ProductProvider from "./context/ProductContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import WishlistProvider from "./context/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <AppRoutes />
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="dark"
          />
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </AuthProvider>,
);
