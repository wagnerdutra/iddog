import React from 'react';

import { useAuth } from 'Root/context/auth-context';
import { useUser } from 'Root/context/user-context';

import Title from 'Components/AppTitle';

import { Header, Nav } from './styles';

const AppHeader = () => {
  const { logout } = useAuth();
  const user = useUser();

  return (
    <Header>
      <Title />
      <div>
        <p>
          Welcome:
          <span>{` ${user}`}</span>
        </p>
        <Nav>
          <li>
            <button onClick={logout} type="button">
              Logout
            </button>
          </li>
        </Nav>
      </div>
    </Header>
  );
};

export default AppHeader;
