import React from "react";

import { Header } from "../components/";
import logo from "../images/logo.png";

export function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Group>
          <Header.Logo src={logo} title="MealPal" alt="MealPal" />
          <Header.HomeLink>MealPal</Header.HomeLink>
        </Header.Group>
        <Header.Navigation>
          <Header.ButtonLink type="secondaryPastelBlue" size="normal">
            Sign Up
          </Header.ButtonLink>
          <Header.ButtonLink type="primaryPastelBlue" size="normal">
            Sign Up
          </Header.ButtonLink>
        </Header.Navigation>
      </Header.Frame>
    </Header>
  );
}
