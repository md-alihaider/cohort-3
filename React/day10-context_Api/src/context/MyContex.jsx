import { createContext, useState } from "react";

// setup our blank store ---
export const MyStore = createContext();

// make a provider of our store who handle data
// and serves to the customers
export const ContextProvider = ({ children }) => {
  const [centralValue, setCentralValue] = useState("this is from context")
  return <MyStore.Provider value={centralValue}>{children}</MyStore.Provider>;
};
