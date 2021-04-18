import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/consts";
import { GlobalStyle } from "./theme/globalStyle";

import { useAuthListener } from "./hooks";
import { RoutesRedirect } from "./helpers/routes";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faCheck,
  faHome,
  faFile,
  faLeaf,
  faPencilAlt,
  faPowerOff,
  faSignOutAlt,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faBook,
  faCheck,
  faHome,
  faFile,
  faLeaf,
  faPencilAlt,
  faPowerOff,
  faSignOutAlt,
  faWeight
);

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
