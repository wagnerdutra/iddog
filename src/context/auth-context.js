import React from 'react';
import { useAsync } from 'react-async';

import axios from '../services/api';

import { bootstrapApp } from '../utils/bootstrapApp';

import { FullScreenLoading } from '../components/Loading';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const { data = { email: null, token: null }, isPending, reload } = useAsync({
    promiseFn: bootstrapApp
  });

  if (isPending) {
    return <FullScreenLoading />;
  }

  const register = form =>
    axios
      .post(
        '/signup',
        { ...form },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(({ data: { user } }) => {
        window.localStorage.setItem('userData', JSON.stringify(user));
        reload();
        return user;
      });

  const logout = () => {
    window.localStorage.removeItem('userData');
    reload();
  };

  return <AuthContext.Provider value={{ data, register, logout }} {...props} />;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
