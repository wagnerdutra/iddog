import React from 'react';

import { Route, Router } from 'react-router-dom';

import { createMemoryHistory } from 'history';

import { render } from 'react-testing-library';

import Feed from 'Pages/Feed';

import { AuthContext } from 'Root/context/auth-context';

import { useAxiosAuth } from 'Root/hooks/axiosAuth';

jest.mock('Root/hooks/axiosAuth');

useAxiosAuth.mockReturnValue({
  get: jest
    .fn()
    .mockReturnValueOnce(Promise.resolve({ data: { list: ['1', '2'] } })) // husky
    .mockReturnValueOnce(Promise.resolve({ data: { list: ['1', '2', '3'] } })) // pug
});

// https://github.com/testing-library/react-testing-library/issues/281 ISSUE
describe('<Feed />', () => {
  it('should handle the page Feed navigation', () => {
    const route = '/feed';
    const history = createMemoryHistory({ initialEntries: [route] });
    const { container } = render(
      <Router history={history}>
        <Route exact path="/feed" component={Feed} />
      </Router>
    );
  });
});
