import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSizeMedium};
    font-weight: ${({ theme }) => theme.fontWeightNormal};
    background-color: ${({ theme }) => theme.background.body};
    line-height: ${({ theme }) => theme.lineHeightNormal};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input, textarea, button {
    font-family: inherit
  }
`;
