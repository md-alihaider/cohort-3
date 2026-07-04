import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <SignUp setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default App;
