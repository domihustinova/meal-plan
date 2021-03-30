import React from "react";

import {
  ButtonGroup,
  Card,
  CardGroup,
  CardList,
  CardListItem,
  CardTitle,
  Container,
  Content,
  Frame,
  Image,
  ProgressBar,
  ProgressBarMoved,
  ProgressBarBackground,
  StyledButton,
  Text,
  TextContainer,
  Title,
} from "./styles/Results";

export default function Results({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Results.Frame = function ResultsFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Results.Title = function ResultsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Results.Text = function ResultsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Results.TextContainer = function ResultsTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

Results.Image = function ResultsImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Results.Content = function ResultsContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Results.ButtonGroup = function ResultsButtonGroup({ children, ...restProps }) {
  return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

Results.Button = function ResultsButtonLink({
  themeType,
  size,
  children,
  ...restProps
}) {
  return (
    <StyledButton themeType={themeType} size={size} {...restProps}>
      {children}
    </StyledButton>
  );
};

Results.CardGroup = function ResultsCardGroup({ children, ...restProps }) {
  return <CardGroup {...restProps}>{children}</CardGroup>;
};

Results.Card = function ResultsCard({
  ratioData,
  maxMacroValue,
  ...restProps
}) {
  return (
    <Card {...restProps}>
      <CardTitle>{ratioData.name}</CardTitle>
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
