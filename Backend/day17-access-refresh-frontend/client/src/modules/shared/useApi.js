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

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        console.log("Unauthorized, need to refresh token");
        const res = await api.post("/auth/refresh");
        console.log("Refreshing access token", res);
        authContext.setAccessToken(res.data.accessToken);
        error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return api(error.config);
      }
      return Promise.reject(error);
    },
  );
  return api;
};

export default useApi;
