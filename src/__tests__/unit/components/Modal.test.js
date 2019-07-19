import React from 'react';

import { render, fireEvent } from 'react-testing-library';

import Modal from 'Components/Modal';

describe('<Modal />', () => {
  it('should render with show false correctly', () => {
    const { container } = render(
      <Modal closeModal={() => {}} showModal={false}>
        <p>Teste</p>
      </Modal>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with show true correctly', () => {
    const { container } = render(
      <Modal closeModal={() => {}} showModal>
        <p>Teste</p>
      </Modal>
    );
    expect(container).toMatchSnapshot();
  });

  it('should handle modal click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Modal closeModal={onClick} showModal>
        <p>Teste</p>
      </Modal>
    );
    fireEvent.click(getByTestId('modal-id'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
