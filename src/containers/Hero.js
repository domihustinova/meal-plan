import React from "react";

import { Hero } from "../components/";
import hero from "../images/hero.svg";

export function HeroContainer() {
  return (
    <Hero>
      <Hero.Frame>
        <Hero.Image src={hero} />
        <Hero.TextContainer>
          <Hero.Title>The best way to plan your meals</Hero.Title>
          <Hero.Text>
            With MealPal you can easily plan your day, save all your important
            data and keep them within arm's reach.
          </Hero.Text>
          <Hero.ButtonLink type="primaryPastelBlue" size="normal">
            Get Started
          </Hero.ButtonLink>
        </Hero.TextContainer>
      </Hero.Frame>
    </Hero>
  );
}
