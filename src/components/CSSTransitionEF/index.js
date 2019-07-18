import React from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { Transition } from './styles';

const CSSTransitionEF = ({ children, inProp }) => (
  <Transition>
    <CSSTransition in={inProp} timeout={300} classNames="effect" unmountOnExit>
      {children}
    </CSSTransition>
  </Transition>
);

CSSTransitionEF.propTypes = {
  children: propTypes.node.isRequired,
  inProp: propTypes.bool.isRequired
};

export default CSSTransitionEF;
