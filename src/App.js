import React, { Fragment } from "react";
import { GlobalStyle } from "./theme/globalStyle";
import { Home } from "./pages/Home";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
