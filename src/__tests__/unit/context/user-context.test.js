import React from 'react';

import { useUser, UserContext, UserProvider } from 'Root/context/user-context';

import { render } from '@testing-library/react';

const UserConsumer = () => {
  const email = useUser();
  return <p data-testid="email-id">{email}</p>;
};

jest.mock('Root/context/auth-context', () => {
  const useAuth = () => ({
    data: {
      email: 'teste@gmail.com'
    }
  });
  return { useAuth };
});

const email = 'teste@gmail.com';

describe('user-context', () => {
  it('should has the Provider passed value', () => {
    const { getByTestId } = render(
      <UserContext.Provider value={email}>
        <UserConsumer />
      </UserContext.Provider>
    );
    expect(getByTestId('email-id')).toHaveTextContent(email);
  });
});
