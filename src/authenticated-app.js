import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const AuthenticatedApp = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default AuthenticatedApp;
