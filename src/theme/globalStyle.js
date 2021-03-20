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
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    background-color: rgb(238, 244, 244);
    line-height: 1.3;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
