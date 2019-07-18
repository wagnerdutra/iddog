import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--main-bg-color);
  width: 100%;
  height: 100%;
`;

const Nav = styled.ul`
  margin-top: 20px;
  list-style: none;
  display: flex;

  li {
    margin-right: 10px;

    &.active {
      font-weight: bold;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-size: 18px;
      line-height: 32px;
    }
  }
`;

const Content = styled.div`
  margin-top: 100px;
  justify-content: center;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: inherit;
  width: 100%;
`;

const fadeInImages = keyframes`
  0% {
    margin-top: 40px;
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    margin-top: 0;
  }
`;

const ImagesList = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  animation: ${fadeInImages} 0.5s;
  animation-fill-mode: forwards;
`;

export { Container, ImagesList, Content, Nav };
