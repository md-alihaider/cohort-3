import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
    <div className=" bg-blue-200 p-2 flex flex-col gap-4">
      <Navbar />
      <AppRoutes/>
    </div>
  );
};

export default App;
