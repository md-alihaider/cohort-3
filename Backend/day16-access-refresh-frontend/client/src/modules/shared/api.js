import axios from "axios";
import { useAuth } from "../auth/context/AuthContext";

const api = axios.create({
  baseURL: "http://localhost:5173/api",
  withCredentials: true,
});

const useApi = () => {
  const { accessToken } = useAuth();

  //so whenever we do any req with axios it has interceptor which can read and modify req
  api.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  return api;
};

export default useApi 