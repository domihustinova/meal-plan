import React from "react";
import {
  Badge,
  BadgeMeal,
  BadgesContainer,
  BadgesGroup,
  Button,
  ButtonGroup,
  Card,
  Container,
  Frame,
  Image,
  InfoContainer,
  Text,
  Title,
} from "./styles/RecipeCardList";

export default function RecipeCardList({
  children,
  direction = "row",
  ...restProps
}) {
  return <Card {...restProps}>{children}</Card>;
}

RecipeCardList.Container = function RecipeCardListContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

RecipeCardList.Frame = function RecipeCardListFrame({
  children,
  ...restProps
}) {
  return <Frame {...restProps}>{children}</Frame>;
};

RecipeCardList.Image = function RecipeCardListImage({ ...restProps }) {
  return <Image {...restProps} />;
};

RecipeCardList.InfoContainer = function RecipeCardListInfoContainer({
  children,
  ...restProps
}) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};

RecipeCardList.BadgesContainer = function RecipeCardListBadgesContainer({
  children,
  ...restProps
}) {
  return <BadgesContainer {...restProps}>{children}</BadgesContainer>;
};

RecipeCardList.BadgesGroup = function RecipeCardListBadgesGroup({
  children,
  ...restProps
}) {
  return <BadgesGroup {...restProps}>{children}</BadgesGroup>;
};

RecipeCardList.Text = function RecipeCardListText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

RecipeCardList.Badge = function RecipeCardListBadge({
  children,
  ...restProps
}) {
  return <Badge {...restProps}>{children}</Badge>;
};

RecipeCardList.BadgeMeal = function RecipeCardListBadgeMeal({
  children,
  ...restProps
}) {
  return <BadgeMeal {...restProps}>{children}</BadgeMeal>;
};

RecipeCardList.Title = function RecipeCardListTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};

RecipeCardList.ButtonGroup = function RecipeCardListButtonGroup({
  children,
  ...restProps
}) {
  return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

RecipeCardList.Button = function RecipeCardListButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}>{children}</Button>;
};
