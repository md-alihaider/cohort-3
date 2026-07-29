import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import FavrouitePage from "../Pages/FavrouitePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ArtistDashBoard from "../Pages/ArtistDashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "favrouite",
        element: <FavrouitePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "artist-dashboard",
        element: <ArtistDashBoard />,
      },
    ],
  },
]);

export default router