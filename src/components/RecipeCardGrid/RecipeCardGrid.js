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
  FooterButton,
  FooterView,
  Image,
  MealType,
  TextContainer,
  Time,
  Title,
} from "./styles/RecipeCardGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecipeCardGrid({
  children,
  direction = "row",
  ...restProps
}) {
  return <Card {...restProps}>{children}</Card>;
}

RecipeCardGrid.Container = function RecipeCardGridContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

RecipeCardGrid.TextContainer = function RecipeCardGridTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

RecipeCardGrid.Time = function RecipeCardGridTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};

RecipeCardGrid.MealType = function RecipeCardGridMealType({
  children,
  ...restProps
}) {
  return <MealType {...restProps}>{children}</MealType>;
};

RecipeCardGrid.Title = function RecipeCardGridTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};

RecipeCardGrid.EnergyContainer = function RecipeCardGridEnergyContainer({
  children,
  ...restProps
}) {
  return <EnergyContainer {...restProps}>{children}</EnergyContainer>;
};

RecipeCardGrid.Energy = function RecipeCardGridEnergy({
  children,
  ...restProps
}) {
  return <Energy {...restProps}>{children}</Energy>;
};

RecipeCardGrid.EnergyTitle = function RecipeCardGridEnergyTitle({
  children,
  ...restProps
}) {
  return <EnergyTitle {...restProps}>{children}</EnergyTitle>;
};

RecipeCardGrid.EnergyValue = function RecipeCardGridEnergyValue({
  children,
  ...restProps
}) {
  return <EnergyValue {...restProps}>{children}</EnergyValue>;
};

RecipeCardGrid.Footer = function RecipeCardGridFooter({
  children,
  ...restProps
}) {
  return <Footer {...restProps}>{children}</Footer>;
};

RecipeCardGrid.FooterView = function RecipeCardGridFooterView({
  children,
  ...restProps
}) {
  return (
    <FooterView {...restProps}>
      <FontAwesomeIcon icon="search" /> {children}
    </FooterView>
  );
};

RecipeCardGrid.FooterAdd = function RecipeCardGridFooterAdd({
  saved,
  children,
  ...restProps
}) {
  return (
    <FooterAdd saved={saved} {...restProps}>
      {children} {saved && <FontAwesomeIcon icon="check" />}
    </FooterAdd>
  );
};

RecipeCardGrid.FooterEdit = function RecipeCardGridFooterEdit({
  children,
  ...restProps
}) {
  return <FooterView {...restProps}>{children}</FooterView>;
};

RecipeCardGrid.FooterRemove = function RecipeCardGridFooterRemove({
  children,
  ...restProps
}) {
  return <FooterButton {...restProps}>{children}</FooterButton>;
};

RecipeCardGrid.Image = function RecipeCardGridImage({ ...restProps }) {
  return <Image {...restProps} />;
};
