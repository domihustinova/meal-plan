import React from "react";

import {
  Container,
  Title,
  Description,
  Content,
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  CardTitle,
  CardList,
  CardListItem,
  ProgressBar,
  ProgressBarMoved,
  ProgressBarBackground,
} from "./styles/Results";

export default function Results({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Results.Title = function ResultsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Results.Description = function ResultsDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Results.Content = function ResultsContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Results.ButtonGroup = function ResultsButtonGroup({ children, ...restProps }) {
  return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

Results.Button = function ResultsButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Results.CardGroup = function ResultsCardGroup({ children, ...restProps }) {
  return <CardGroup {...restProps}>{children}</CardGroup>;
};

Results.Card = function ResultsCard({
  ratioData,
  maxMacroValue,
  children,
  ...restProps
}) {
  return (
    <Card {...restProps}>
      <CardTitle>{ratioData.ratioName}</CardTitle>
      <CardList>
        {ratioData.macros.map((macro) => (
          <CardListItem>
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
