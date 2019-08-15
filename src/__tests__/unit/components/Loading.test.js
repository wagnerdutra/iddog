import React from 'react';

import { render } from '@testing-library/react';

import Loading, { FullScreenLoading } from 'Components/Loading';

describe('<Loading />', () => {
  it('should render correctly', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});

describe('<FullScreenLoading />', () => {
  it('should render correctly', () => {
    const { container } = render(<FullScreenLoading />);
    expect(container).toMatchSnapshot();
  });
});
