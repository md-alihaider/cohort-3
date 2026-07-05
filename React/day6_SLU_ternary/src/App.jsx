import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <div className="min-h-screen bg-gray-100">
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <SignUp setUsers={setUsers} setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default App;
