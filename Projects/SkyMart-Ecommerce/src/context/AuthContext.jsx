import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")),
  );
  console.log("registered user: ", registeredUsers);
  console.log("logged in user: ", loggedInUser);
  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setLoggedInUser,
        setRegisteredUsers,
        loggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
