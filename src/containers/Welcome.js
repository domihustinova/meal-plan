import React from "react";

import { Welcome } from "../components/";
import salad from "../images/salad.png";
import * as ROUTES from "../constants/routes";

export function WelcomeContainer() {
  return (
    <Welcome>
      <Welcome.Frame>
        <Welcome.Image src={salad} />
        <Welcome.TextContainer>
          <Welcome.Title>Welcome to MealPal!</Welcome.Title>
          <Welcome.Text>
            You are all good to go! Hit the ground running and fill your{" "}
            <Welcome.Link to={ROUTES.PROFILE}>profile</Welcome.Link>.
          </Welcome.Text>
        </Welcome.TextContainer>
      </Welcome.Frame>
    </Welcome>
  );
}
