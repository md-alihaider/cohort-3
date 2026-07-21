import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer} from "react-toastify";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppRouter />
    <ToastContainer />
  </AuthProvider>,
);
