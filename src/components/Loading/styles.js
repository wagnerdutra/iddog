import styled from 'styled-components';

const ImageStyle = styled.img`
  height: ${props => props.height};
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--main-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
`;

export { Container, ImageStyle };
