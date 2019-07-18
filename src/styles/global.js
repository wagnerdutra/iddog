import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

  ${normalize}

  /* App theme colors */
  :root {
    --main-bg-color: #f7f7f7;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(--main-bg-color);
    min-width: 320px;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    /* Deixa a font no chrome ou no safari mais detalhadas */
  }

  h1 {
    margin: 0;
  }

  h1, p, span, button {
    font-family: url('../assets/fonts/NotoSerifTC-ExtraLight.otf'), sans-serif;
  }

`;

export default GlobalStyle;
