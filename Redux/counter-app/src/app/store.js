import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/feature/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
