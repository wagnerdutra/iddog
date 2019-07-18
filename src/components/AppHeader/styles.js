import styled from 'styled-components';

const Header = styled.header`
  background: var(--main-bg-color);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 100px;

  div {
    display: flex;
    p {
      white-space: nowrap;

      span {
        font-weight: bold;
      }
    }

    @media only screen and (max-width: 350px) {
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: center;

    div {
      @media only screen and (max-width: 1050px) {
        margin-top: 20px;
      }
    }
  }
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 20px;

  li {
    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

export { Header, Nav };
