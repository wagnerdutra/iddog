import React from 'react';

import { render, fireEvent } from 'react-testing-library';

import AppHeader from 'Components/AppHeader';

import { useAuth } from 'Root/context/auth-context';
import { useUser } from 'Root/context/user-context';

const logout = jest.fn();

jest.mock('Root/context/auth-context');
jest.mock('Root/context/user-context');

useUser.mockReturnValue('wagnerdutra1010@gmail.com');
useAuth.mockReturnValue({ logout });

describe('<AppHeader />', () => {
  it('should render correctly', () => {
    const { container } = render(<AppHeader />);
    expect(container).toMatchSnapshot();
  });

  it('should has user email', () => {
    const { getByText } = render(<AppHeader />);
    const email = getByText('wagnerdutra1010@gmail.com');
    expect(email).toBeInTheDocument();
  });

  it('should handle logout click', () => {
    const { getByText } = render(<AppHeader />);
    const button = getByText('Logout');
    fireEvent.click(button);
    expect(logout).toHaveBeenCalledTimes(1);
  });
});
