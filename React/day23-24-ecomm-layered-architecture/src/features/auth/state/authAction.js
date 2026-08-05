import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const res = await api.post("/auth/login", credentials);
      toast.success("User loggedIn 👋");
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      toast.error("login failed..");
      return thunkApi.rejectWithValue("login failed");
    }
  },
);


export const hydrateUserAction = createAsyncThunk("/auth/hydrate", async(_, thunkApi) => {
  const token = localStorage.getItem("accessToken");
  try {
    const res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
      },
    }); 
    return res.data;
  } catch (error) {
    toast.error("Unauthorized User");
    return thunkApi.rejectWithValue("Unauthorized User");
  }
})