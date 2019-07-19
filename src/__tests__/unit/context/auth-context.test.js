import React from 'react';

import { useAuth, AuthContext } from 'Root/context/auth-context';

import { render, fireEvent } from 'react-testing-library';

jest.mock('Root/services/api');

const AuthConsumer = () => {
  const { data, register, logout } = useAuth();
  return (
    <>
      <p data-testid="email-id">{data.email}</p>
      <p data-testid="token-id">{data.token}</p>
      <button type="button" data-testid="register-id" onClick={register} />
      <button type="button" data-testid="logout-id" onClick={logout} />
    </>
  );
};

const auth = {
  data: { email: 'teste@gmail.com', token: '123456' },
  register: jest.fn(),
  logout: jest.fn()
};

describe('auth-context', () => {
  it('should has the Provider passed value and handle the Provider events', () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={auth}>
        <AuthConsumer />
      </AuthContext.Provider>
    );

    fireEvent.click(getByTestId('register-id'));
    fireEvent.click(getByTestId('logout-id'));

    expect(auth.register).toHaveBeenCalledTimes(1);
    expect(auth.logout).toHaveBeenCalledTimes(1);

    const {
      data: { email, token }
    } = auth;

    expect(getByTestId('email-id')).toHaveTextContent(email);
    expect(getByTestId('token-id')).toHaveTextContent(token);
  });
});
