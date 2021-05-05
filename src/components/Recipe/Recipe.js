import React from "react";
import {
  Card,
  Container,
  Energy,
  EnergyContainer,
  EnergyTitle,
  EnergyValue,
  Footer,
  FooterAdd,
  FooterRemove,
  FooterView,
  Image,
  TextContainer,
  Time,
  Title,
} from "./styles/Recipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Recipe({ children, direction = "row", ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
}

Recipe.Container = function RecipeContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Recipe.TextContainer = function RecipeTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

Recipe.Time = function RecipeTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};

Recipe.Title = function RecipeTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Recipe.EnergyContainer = function RecipeEnergyContainer({
  children,
  ...restProps
}) {
  return <EnergyContainer {...restProps}>{children}</EnergyContainer>;
};

Recipe.Energy = function RecipeEnergy({ children, ...restProps }) {
  return <Energy {...restProps}>{children}</Energy>;
};

Recipe.EnergyTitle = function RecipeEnergyTitle({ children, ...restProps }) {
  return <EnergyTitle {...restProps}>{children}</EnergyTitle>;
};

Recipe.EnergyValue = function RecipeEnergyValue({ children, ...restProps }) {
  return <EnergyValue {...restProps}>{children}</EnergyValue>;
};

Recipe.Footer = function RecipeFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
};

Recipe.FooterView = function RecipeFooterView({ children, ...restProps }) {
  return (
    <FooterView {...restProps}>
      <FontAwesomeIcon icon="search" /> {children}
    </FooterView>
  );
};

Recipe.FooterAdd = function RecipeFooterAdd({ children, ...restProps }) {
  return <FooterAdd {...restProps}>{children}</FooterAdd>;
};

Recipe.FooterRemove = function RecipeFooterRemove({ children, ...restProps }) {
  return <FooterRemove {...restProps}>{children}</FooterRemove>;
};

Recipe.Image = function RecipeImage({ ...restProps }) {
  return <Image {...restProps} />;
};
