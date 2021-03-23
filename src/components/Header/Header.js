import React from "react";

import {
  ButtonLink,
  Container,
  Frame,
  Group,
  HomeLink,
  Logo,
  Navigation,
} from "./styles/Header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return <Logo {...restProps} />;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.HomeLink = function HeaderHomeLink({ children, ...restProps }) {
  return <HomeLink {...restProps}>{children}</HomeLink>;
};

Header.ButtonLink = function HeaderButtonLink({
  type,
  size,
  children,
  ...restProps
}) {
  return (
    <ButtonLink type={type} size={size} {...restProps}>
      {children}
    </ButtonLink>
  );
};

Header.Navigation = function HeaderNavigation({ children, ...restProps }) {
  return <Navigation {...restProps}>{children}</Navigation>;
};
