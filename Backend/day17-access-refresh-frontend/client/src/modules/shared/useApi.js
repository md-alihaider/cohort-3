import axios from "axios";
import { useAuthContext } from "../auth/context/AuthContext";

const api = axios.create({
  baseURL: "http://localhost:5173/api",
  withCredentials: true,
});

const useApi = () => {
  const authContext = useAuthContext();

  //so whenever we do any req with axios it has interceptor which can read and modify req
  api.interceptors.request.use(
    (config) => {
      if (authContext.accessToken) {
        config.headers.Authorization = `Bearer ${authContext.accessToken}`;
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