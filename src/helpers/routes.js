import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { LayoutContainer } from "../containers/Layout";
import { Home, Meals, Measurements, Overview, SignIn, SignUp } from "../pages";

export function RoutesRedirect({ user }) {
  return (
    <>
      <Route exact path={ROUTES.SIGN_IN}>
        {user ? <Redirect to={ROUTES.OVERVIEW} /> : <SignIn />}
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        {user ? <Redirect to={ROUTES.OVERVIEW} /> : <SignUp />}
      </Route>
      <Route exact path={ROUTES.HOME}>
        {user ? <Redirect to={ROUTES.OVERVIEW} /> : <Home />}
      </Route>

      <PrivateRoute
        exact
        path={ROUTES.OVERVIEW}
        component={Overview}
        user={user}
      />
      <PrivateRoute exact path={ROUTES.MEALS} component={Meals} user={user} />
      <PrivateRoute
        exact
        path={ROUTES.MEASUREMENTS}
        component={Measurements}
        user={user}
      />
    </>
  );
}

function PrivateRoute({ user, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <LayoutContainer {...props} user={user}>
            <Component {...props} />
          </LayoutContainer>
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.SIGN_IN,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
