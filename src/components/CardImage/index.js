import React from 'react';
import propTypes from 'prop-types';

import { CardStyle } from './styles';

const Card = ({ src, width, height, cursor, margin }) => (
  <CardStyle width={width} height={height} cursor={cursor ? 1 : 0} margin={margin}>
    <img src={src} alt={src} />
  </CardStyle>
);

Card.propTypes = {
  src: propTypes.string.isRequired,
  width: propTypes.number,
  height: propTypes.number,
  margin: propTypes.number,
  cursor: propTypes.bool
};

Card.defaultProps = {
  width: 100,
  height: 100,
  cursor: false,
  margin: 10
};

export default Card;
