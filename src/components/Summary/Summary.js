import React from "react";

import {
  Card,
  CardCalories,
  CardCaloriesContent,
  CardCaloriesNumber,
  CardCaloriesText,
  CardGroup,
  CardList,
  CardListItem,
  CardTitle,
  Container,
  Frame,
  ProgressBar,
  ProgressBarMoved,
  ProgressBarBackground,
  Title,
} from "./styles/Summary";

export default function Summary({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Summary.Frame = function SummaryFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Summary.Title = function SummaryTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Summary.CardGroup = function SummaryCardGroup({ children, ...restProps }) {
  return <CardGroup {...restProps}>{children}</CardGroup>;
};

Summary.Card = function SummaryCard({
  ratioData,
  maxMacroValue,
  ...restProps
}) {
  return (
    <Card {...restProps}>
      <CardTitle>Macronutrient Ratios</CardTitle>
      <CardList>
        {ratioData.macros.map((macro) => (
          <CardListItem key={macro.name}>
            {macro.name} - {macro.amount}g
            <ProgressBar>
              <ProgressBarBackground>
                <ProgressBarMoved
                  background={macro.key}
                  width={`${(macro.amount / maxMacroValue) * 100}%`}
                />
              </ProgressBarBackground>
            </ProgressBar>
          </CardListItem>
        ))}
      </CardList>
    </Card>
  );
};

Summary.CardCalories = function SummaryCardCalories({
  calories,
  ...restProps
}) {
  return (
    <CardCalories {...restProps}>
      <CardTitle>Calorie Intake</CardTitle>
      <CardCaloriesContent>
        <CardCaloriesNumber>{calories}</CardCaloriesNumber>
        <CardCaloriesText>Calories</CardCaloriesText>
      </CardCaloriesContent>
    </CardCalories>
  );
};
