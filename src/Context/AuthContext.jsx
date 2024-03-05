import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    localStorage.setItem('token' , token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  );
};