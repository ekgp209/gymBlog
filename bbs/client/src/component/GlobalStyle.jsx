import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
  }

  a, li, ul{
    text-decoration: none;
  }

  Link {
    text-decoration: none;
  }
`;

export default GlobalStyle;
