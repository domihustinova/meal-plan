import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/consts";
import { GlobalStyle } from "./theme/globalStyle";

import {
  useAuthListener,
  useMeasurementsListener,
  useRecipesListener,
} from "./hooks";
import { RoutesRedirect } from "./helpers/routes";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faPencilAlt, faTh, faThList } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheck, faPencilAlt, faTh,
    faThList);

function App() {
  const { user } = useAuthListener();
  const { measurementsData } = useMeasurementsListener(user);
  const { savedRecipes, savedRecipesIds } = useRecipesListener(user);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <RoutesRedirect
            user={user}
            measurementsData={measurementsData}
            savedRecipes={savedRecipes}
            savedRecipesIds={savedRecipesIds}
          />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
