import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/consts";
import { GlobalStyle } from "./theme/globalStyle";

import { Home, SignIn, SignUp, Dashboard } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import * as ROUTES from "./constants/routes";

function App() {
  const user = null;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.DASHBOARD}
            path={ROUTES.SIGN_IN}
            exact
          >
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.DASHBOARD}
            path={ROUTES.SIGN_UP}
            exact
          >
            <SignUp />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.DASHBOARD}>
            <Dashboard />
          </ProtectedRoute>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.DASHBOARD}
            path={ROUTES.HOME}
            exact
          >
            <Home />
          </IsUserRedirect>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
