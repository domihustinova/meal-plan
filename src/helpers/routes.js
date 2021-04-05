import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { Home, SignIn, SignUp, Dashboard } from "../pages";

export function RoutesRedirect({ user }) {
  return (
    <>
      <Route exact path={ROUTES.SIGN_IN}>
        {user ? <Redirect to={ROUTES.DASHBOARD} /> : <SignIn />}
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        {user ? <Redirect to={ROUTES.DASHBOARD} /> : <SignUp />}
      </Route>
      <Route exact path={ROUTES.DASHBOARD}>
        {user ? <Dashboard user={user} /> : <Redirect to={ROUTES.SIGN_IN} />}
      </Route>
      <Route exact path={ROUTES.HOME}>
        {user ? <Redirect to={ROUTES.DASHBOARD} /> : <Home />}
      </Route>
    </>
  );
}
