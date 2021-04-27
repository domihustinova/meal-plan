import React from "react";

import {
  Container,
  Frame,
  Image,
  Link,
  Text,
  TextContainer,
  Title,
} from "./styles/Welcome";

export default function Welcome({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Welcome.Frame = function WelcomeFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Welcome.Title = function WelcomeTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Welcome.Text = function WelcomeText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Welcome.TextContainer = function WelcomeTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

Welcome.Image = function WelcomeImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Welcome.Link = function WelcomeLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
