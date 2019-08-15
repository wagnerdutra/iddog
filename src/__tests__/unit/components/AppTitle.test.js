import React from 'react';

import { render } from '@testing-library/react';

import AppTitle from 'Components/AppTitle';

describe('<AppTitle />', () => {
  it('should render correctly', () => {
    const { container } = render(<AppTitle />);
    expect(container).toMatchSnapshot();
  });
});
