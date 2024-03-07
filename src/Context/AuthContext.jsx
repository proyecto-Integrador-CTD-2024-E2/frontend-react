import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));
  
  
 
  const login = (token ) => {
    localStorage.setItem('token' , token);
   
    setToken(token)
    setIsLogged(true)
    // logica para redireccionar al home cuando se loguee 
  };

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null);
    setToken(null)
    setIsLogged(false)
  };

  const value = {
    user,
    login,
    logout,
    token,
    isLogged
  }

  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  );
};