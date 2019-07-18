import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import AppHeader from './components/AppHeader';

const AuthenticatedApp = () => (
  <BrowserRouter>
    <AppHeader />
    <Routes />
  </BrowserRouter>
);

export default AuthenticatedApp;
