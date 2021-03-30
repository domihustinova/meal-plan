import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/consts";
import { GlobalStyle } from "./theme/globalStyle";

import { Home, SignIn, SignUp, Dashboard } from "./pages";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path={ROUTES.SIGN_IN}>
            <SignIn />
          </Route>
          <Route exact path={ROUTES.SIGN_UP}>
            <SignUp />
          </Route>
          <Route exact path={ROUTES.DASHBOARD}>
            <Dashboard />
          </Route>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
