import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/consts";
import { GlobalStyle } from "./theme/globalStyle";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Home />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
