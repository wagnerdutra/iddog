import React from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

function AuthProvider(props) {
  // const login = form => authClient.login(form).then(reload);
  // const logout = () => authClient.logout().then(reload);

  const data = window.localStorage.getItem('userData') || { user: null, token: null };

  const register = form => axios.post({ ...form });

  return <AuthContext.Provider value={{ data, register }} {...props} />;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
