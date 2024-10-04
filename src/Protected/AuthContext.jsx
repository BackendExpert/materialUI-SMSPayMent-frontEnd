import { createContext, useContext, useEffect, useState } from 'react';
import  secureLocalStorage  from  "react-secure-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const login = (token, Email, Role) => {
    localStorage.setItem('token', token);
    secureLocalStorage.setItem('Login1', Email);      
    secureLocalStorage.setItem('Login2', Role);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
