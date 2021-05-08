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
} from "./styles/RecipeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecipeCard({
  children,
  direction = "row",
  ...restProps
}) {
  return <Card {...restProps}>{children}</Card>;
}

RecipeCard.Container = function RecipeCardContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

RecipeCard.TextContainer = function RecipeCardTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

RecipeCard.Time = function RecipeCardTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};

RecipeCard.Title = function RecipeCardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

RecipeCard.EnergyContainer = function RecipeCardEnergyContainer({
  children,
  ...restProps
}) {
  return <EnergyContainer {...restProps}>{children}</EnergyContainer>;
};

RecipeCard.Energy = function RecipeCardEnergy({ children, ...restProps }) {
  return <Energy {...restProps}>{children}</Energy>;
};

RecipeCard.EnergyTitle = function RecipeCardEnergyTitle({
  children,
  ...restProps
}) {
  return <EnergyTitle {...restProps}>{children}</EnergyTitle>;
};

RecipeCard.EnergyValue = function RecipeCardEnergyValue({
  children,
  ...restProps
}) {
  return <EnergyValue {...restProps}>{children}</EnergyValue>;
};

RecipeCard.Footer = function RecipeCardFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
};

RecipeCard.FooterView = function RecipeCardFooterView({
  children,
  ...restProps
}) {
  return (
    <FooterView {...restProps}>
      <FontAwesomeIcon icon="search" /> {children}
    </FooterView>
  );
};

RecipeCard.FooterAdd = function RecipeCardFooterAdd({
  children,
  ...restProps
}) {
  return <FooterAdd {...restProps}>{children}</FooterAdd>;
};

RecipeCard.FooterRemove = function RecipeCardFooterRemove({
  children,
  ...restProps
}) {
  return <FooterRemove {...restProps}>{children}</FooterRemove>;
};

RecipeCard.Image = function RecipeCardImage({ ...restProps }) {
  return <Image {...restProps} />;
};
