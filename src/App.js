import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStype from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStype />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
