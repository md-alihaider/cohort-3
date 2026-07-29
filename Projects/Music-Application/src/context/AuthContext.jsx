import React, { createContext } from 'react'

export const AuthContextData = createContext()
const AuthContext = ({ children }) => {
  const greet = "hello from Context"
  return (
    <AuthContextData.Provider value={greet}>
      {children}
    </AuthContextData.Provider>
  )
}

export default AuthContext