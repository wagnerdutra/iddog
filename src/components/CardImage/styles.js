import styled, { css } from 'styled-components';
import gifLoading from 'Root/assets/loader.gif';

const CardStyle = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: ${props => props.margin}px;
  border-radius: 2%;

  img {
    transition: all 0.3s;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border-radius: 2%;
    background: transparent url(${gifLoading}) center no-repeat;
    transition: all 0.2s ease-in-out;

    ${props =>
      props.hover &&
      css`
        &:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          transform: scale(1.05);
        }
      `}
  }

  ${props =>
    props.cursor &&
    css`
      cursor: pointer;
    `}
`;

export { CardStyle };
