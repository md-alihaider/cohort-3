import axios from "axios";
import { useAuth } from "../auth/context/AuthContext";

const api = axios.create({
  baseURL: "http://localhost:5173/api",
  withCredentials: true,
});


const useApi = () => {
  const {accessToken} = useAuth()

  api.interceptors.request.use(
    (config)
  )
}