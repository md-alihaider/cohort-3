import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  console.log("Context rendering");
  const [count, setCount] = useState(0);

  // 1. Changed to MyStore.Provider
  // 2. Changed val to value
  return (
    <MyStore.Provider value={{ count, setCount }}>{children}</MyStore.Provider>
  );
};
