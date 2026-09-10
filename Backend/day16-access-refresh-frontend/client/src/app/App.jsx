import { RouterProvider } from "react-router";
import "./App.css";
import router from "./app.routes.jsx";
import { AuthProvider } from "../modules/auth/context/AuthContext.jsx";
const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
