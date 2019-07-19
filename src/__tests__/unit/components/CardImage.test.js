import React from 'react';

import { render, fireEvent } from 'react-testing-library';

import CardImage from 'Components/CardImage';

describe('<CardImage />', () => {
  it('should render correctly', () => {
    const { container } = render(<CardImage src="teste" />);
    expect(container).toMatchSnapshot();
  });

  it('should handle image click', () => {
    const onClick = jest.fn();
    const { container } = render(<CardImage src="teste" onClick={onClick} />);
    fireEvent.click(container.firstChild);
    fireEvent.click(container.querySelector('img'));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
