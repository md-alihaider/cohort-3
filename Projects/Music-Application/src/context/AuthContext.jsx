import React, { createContext } from "react";

export const AuthContextData = createContext();
const AuthContext = ({ children }) => {
  const registerUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExitUser = users.find((user) => {
      return user.email === newUser.email;
    });
    if (alreadyExitUser)
      return {
        success: false,
        message: "User already exist",
      };

    const updateUser = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updateUser));
    return {
      success: true,
      message: "User created successfully",
    };
  };

  const value = {
    registerUser,
  };

  return (
    <AuthContextData.Provider value={value}>
      {children}
    </AuthContextData.Provider>
  );
};

export default AuthContext;
