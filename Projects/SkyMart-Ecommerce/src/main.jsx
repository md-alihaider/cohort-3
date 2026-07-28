import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";
import ProductProvider from "./context/ProductContext.jsx";
import CartProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductProvider>
      <CartProvider>
        <AppRoutes />
        <ToastContainer />
      </CartProvider>
    </ProductProvider>
  </AuthProvider>,
);
