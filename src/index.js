import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProviders from './context';
import GlobalStype from './styles/global';

ReactDOM.render(
  <AppProviders>
    <GlobalStype />
    <App />
  </AppProviders>,
  document.getElementById('root')
);
