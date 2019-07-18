import React from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

const CSSTransitionEF = ({ children, inProp }) => (
  <CSSTransition in={inProp} timeout={300} classNames="effect" unmountOnExit>
    {children}
  </CSSTransition>
);

CSSTransitionEF.propTypes = {
  children: propTypes.node.isRequired,
  inProp: propTypes.bool.isRequired
};

export default CSSTransitionEF;
