import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { LayoutContainer } from "../containers/Layout";
import {
  Editor,
  Home,
  Meals,
  Profile,
  Overview,
  Recipes,
  SignIn,
  SignUp,
} from "../pages";

export function RoutesRedirect({ user, measurementsData }) {
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
        measurementsData={measurementsData}
      />
      <PrivateRoute exact path={ROUTES.MEALS} component={Meals} user={user} />
      <PrivateRoute
        exact
        path={ROUTES.PROFILE}
        component={Profile}
        user={user}
        measurementsData={measurementsData}
      />
      <PrivateRoute exact path={ROUTES.EDITOR} component={Editor} user={user} />
      <PrivateRoute
        exact
        path={ROUTES.RECIPES}
        component={Recipes}
        user={user}
      />
    </>
  );
}

function PrivateRoute({
  user,
  measurementsData,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <LayoutContainer {...props} user={user}>
            <Component
              {...props}
              user={user}
              measurementsData={measurementsData}
            />
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
