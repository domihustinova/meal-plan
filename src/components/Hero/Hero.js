import React from "react";

import {
  Container,
  Frame,
  Image,
  Text,
  TextContainer,
  Title,
} from "./styles/Hero";
import ButtonLink from "../common/ButtonLink";

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Frame = function HeroFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Hero.Text = function HeroText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Hero.TextContainer = function HeroTextContainer({ children, ...restProps }) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

Hero.Image = function HeroImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Hero.ButtonLink = function HeroButtonLink({
  to,
  themetype,
  size,
  children,
  ...restProps
}) {
  return (
    <ButtonLink to={to} themetype={themetype} size={size} {...restProps}>
      {children}
    </ButtonLink>
  );
};
