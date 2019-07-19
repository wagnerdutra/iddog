import React from 'react';

import { render, fireEvent } from 'react-testing-library';

import UnauthenticatedApp from 'Root/UnauthenticatedApp';

import { AuthContext } from 'Root/context/auth-context';

import { useAsync } from 'react-async';

jest.mock('react-async');

useAsync.mockReturnValue({
  data: {
    email: 'teste@gmail.com',
    token: '123456'
  },
  isPending: false,
  reload: () => {}
});

describe('<UnauthenticatedApp />', () => {
  it('should handle email insert and login button', () => {
    Object.defineProperty(window, 'localStorage', { value: { getItem: null } });
    const register = jest.fn();

    const { container, getByPlaceholderText } = render(
      <AuthContext.Provider value={{ register }}>
        <UnauthenticatedApp />
      </AuthContext.Provider>
    );

    const input = getByPlaceholderText('Insert your email');
    const button = container.querySelector('button');

    fireEvent.change(input, { target: { value: 'teste@gmail.com' } });
    fireEvent.click(button);

    expect(input.value).toBe('teste@gmail.com');
    expect(register).toHaveBeenCalledTimes(1);
  });
});
