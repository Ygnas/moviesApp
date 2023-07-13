import React, { useState, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fakeAuth from "../fakeAuth";

export const AuthContext = createContext("");

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const authenticate = async (username, password) => {
    const token = await fakeAuth(username, password);
    setToken(token);
    const origin = location.state?.intent?.pathname || "/";
    navigate(origin);
  };

  const signout = () => {
    setToken("");
    navigate('/')
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        authenticate,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
