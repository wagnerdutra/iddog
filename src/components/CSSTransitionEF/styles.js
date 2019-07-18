import styled from 'styled-components';

const Transition = styled.div`
  .effect-enter {
    opacity: 0;
  }
  .effect-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .effect-exit {
    opacity: 1;
  }
  .effect-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

export { Transition };
