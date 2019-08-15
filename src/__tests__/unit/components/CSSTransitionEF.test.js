import React from 'react';

import { render } from '@testing-library/react';

import CSSTransitionEF from 'Components/CSSTransitionEF';

describe('<CSSTransitionEF />', () => {
  it('should render with show false correctly', () => {
    const { container } = render(
      <CSSTransitionEF inProp>
        <p>Teste</p>
      </CSSTransitionEF>
    );
    expect(container).toMatchSnapshot();
  });
});
