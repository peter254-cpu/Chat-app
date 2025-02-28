/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const storedUser = localStorage.getItem("chat-user");
  let parsedUser = null;
  if (storedUser) {
    try {
      parsedUser = JSON.parse(storedUser);
    } catch (error) {
      console.error("Failed to parse stored user", error);
    }
  }
  const [authUser, setAuthUser] = useState(parsedUser);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
