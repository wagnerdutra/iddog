import React, { useRef } from 'react';
import propTypes from 'prop-types';

import { CardStyle } from './styles';

function Card({ src, width, height, cursor, margin, onClick, hover }) {
  const containerRef = useRef();

  function handleContainerClick(e) {
    if (e.target !== containerRef.current) {
      onClick(e.target);
      return;
    }
    onClick(e.target.firstChild);
  }

  return (
    <CardStyle
      width={width}
      height={height}
      cursor={cursor ? 1 : 0}
      margin={margin}
      hover={hover}
      onClick={handleContainerClick}
      ref={containerRef}
    >
      <img src={src} alt={src} />
    </CardStyle>
  );
}

Card.propTypes = {
  src: propTypes.string.isRequired,
  width: propTypes.number,
  height: propTypes.number,
  margin: propTypes.number,
  cursor: propTypes.bool,
  onClick: propTypes.func,
  hover: propTypes.bool
};

Card.defaultProps = {
  width: 100,
  height: 100,
  cursor: false,
  margin: 10,
  onClick: () => {},
  hover: true
};

export default Card;
