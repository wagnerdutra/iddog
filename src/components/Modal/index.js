import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import CSSTransitionEF from '../CSSTransitionEF';

function Modal({ closeModal, children, showModal }) {
  const containerRef = useRef();

  function handleContainerClick(e) {
    if (e.target !== containerRef.current) return;
    closeModal();
  }

  return (
    <CSSTransitionEF inProp={showModal}>
      <Container
        ref={containerRef}
        onClick={handleContainerClick}
        showModal={showModal}
        data-testid="modal-id"
      >
        {children}
      </Container>
    </CSSTransitionEF>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired
};

export default Modal;
