import styled, { keyframes } from 'styled-components';
import { ImageStyle } from 'Components/Loading/styles';

const fadeInTitle = keyframes`
  0% {
    padding-top: 30%;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    padding-top: 10%;
  }
`;

const fadeInEmailField = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  background: var(--main-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInTitle} 2s;
  animation-fill-mode: forwards;

  label {
    opacity: 0;
    margin-top: 200px;
    animation: ${fadeInEmailField} 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;

    input {
      border: 0;
      border-bottom: 1px solid;
      width: 300px;
      padding-bottom: 5px;
      background: transparent;
    }
  }

  button {
    opacity: 0;
    animation: ${fadeInEmailField} 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    padding: 10px 20px;
    margin-top: 20px;
    border: 0;
    cursor: pointer;
  }

  ${ImageStyle} {
    margin-top: 20px;
  }
`;

export { Form };
