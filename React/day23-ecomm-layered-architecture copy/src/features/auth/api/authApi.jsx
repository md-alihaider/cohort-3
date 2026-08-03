import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
  try {
    const res = await api.post("/auth/login", credentials);
    console.log("Response from login api", res);
    localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
  } catch (error) {
    console.log("Error in login api", error);
  }
};

export const hydrateUser = async () => {
  const token = localStorage.getItem("accessToken");
  try {
    const res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
      },
    });
    console.log("Response from hydration api", res);
    return res.data;
  } catch (error) {
    console.log("Error in login api", error);
  }
};
