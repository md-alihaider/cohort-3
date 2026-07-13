import { createContext, useState } from "react";

export const MyStore = createContext();


export const ContextProvider = ({ children }) => {
  console.log("Context rendering")
  const [count, setCount] = useState(0);

  return <MyStore.ContextProvider val={{count,setCount}}>{ children}</MyStore.ContextProvider>
}