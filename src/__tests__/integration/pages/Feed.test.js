import React from 'react';

import { Route, Router } from 'react-router-dom';

import { createMemoryHistory } from 'history';

import { render, wait, fireEvent } from '@testing-library/react';

import Feed from 'Pages/Feed';

import { useAxiosAuth } from 'Root/hooks/axiosAuth';

jest.mock('Root/hooks/axiosAuth');

useAxiosAuth.mockReturnValue({
  get: url => {
    switch (url) {
      case '/feed?category=husky':
        return Promise.resolve({ data: { list: ['1'] } });
      case '/feed?category=labrador':
        return Promise.resolve({ data: { list: ['1', '2'] } });
      case '/feed?category=pug':
        return Promise.resolve({ data: { list: ['1', '2', '3'] } });
      case '/feed?category=hound':
        return Promise.resolve({ data: { list: ['1', '2', '3', '4'] } });
      default:
        return Promise.resolve({ data: { list: ['1'] } });
    }
  }
});

describe('<Feed />', () => {
  it('should handle the page Feed navigation', async () => {
    const route = '/feed';
    const history = createMemoryHistory({ initialEntries: [route] });
    const { container, getByText, debug } = render(
      <Router history={history}>
        <Route exact path="/feed" component={Feed} />
      </Router>
    );

    const huskyLink = getByText('Husky');
    const labradorLink = getByText('Labrador');
    const houndLink = getByText('Hound');
    const pugLink = getByText('Pug');

    await wait(() => {
      const imgs = container.querySelectorAll('img');
      expect(imgs.length).toBe(1);
    });

    fireEvent.click(pugLink);

    await wait(() => {
      const imgs = container.querySelectorAll('img');
      expect(imgs.length).toBe(3);
    });

    fireEvent.click(houndLink);

    await wait(() => {
      const imgs = container.querySelectorAll('img');
      expect(imgs.length).toBe(4);
    });

    fireEvent.click(labradorLink);

    await wait(() => {
      const imgs = container.querySelectorAll('img');
      expect(imgs.length).toBe(2);
    });

    fireEvent.click(huskyLink);

    await wait(() => {
      const imgs = container.querySelectorAll('img');
      expect(imgs.length).toBe(1);
    });
  });
});
