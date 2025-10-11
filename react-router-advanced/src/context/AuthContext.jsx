import React, { createContext, useState, useContext } from "react";

// Create the Auth Context
const AuthContext = createContext();

// Create a custom hook for easy access
export const useAuth = () => useContext(AuthContext);

// Create AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const value = { isAuthenticated, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
