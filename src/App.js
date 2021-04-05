import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/consts";
import { GlobalStyle } from "./theme/globalStyle";

import { useAuthListener } from "./hooks";
import { RoutesRedirect } from "./helpers/routes";

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <RoutesRedirect user={user} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
