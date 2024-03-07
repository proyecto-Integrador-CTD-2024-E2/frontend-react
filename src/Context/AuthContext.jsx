import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ token, setToken ] = useState(null);
  
  const login = ({token }) => {
    localStorage.setItem('token' , token);
   
    setToken({token})
  };

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null);
    setToken(null)
  };

  const value = {
    user,
    login,
    logout,
    token
  }

  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  );
};