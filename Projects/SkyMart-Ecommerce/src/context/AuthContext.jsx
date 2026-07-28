import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);

  // All registered users
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  // Currently logged-in user
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null,
  );

  // Register a new user
  const registerUser = (user) => {
    const updatedUsers = [...registeredUsers, user];

    setRegisteredUsers(updatedUsers);

    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
  };

  // Login user
  const login = (user) => {
    setLoggedInUser(user);

    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  // Logout user
  const logout = () => {
    setLoggedInUser(null);

    localStorage.removeItem("loggedInUser");
  };

  return (
    <Auth.Provider
      value={{
        // State
        registeredUsers,
        loggedInUser,
        showPassword,

        // Actions
        registerUser,
        login,
        logout,

        // Utilities
        setShowPassword,
        setRegisteredUsers,
        setLoggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
