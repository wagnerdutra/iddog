import React from 'react';
import propTypes from 'prop-types';

import { AuthProvider } from './auth-context';
import { UserProvider } from './user-context';

const AppProviders = ({ children }) => (
  <AuthProvider>
    <UserProvider>{children}</UserProvider>
  </AuthProvider>
);

AppProviders.propTypes = {
  children: propTypes.node.isRequired
};

export default AppProviders;
