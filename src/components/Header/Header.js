import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import {
  Container,
  Dropdown,
  Frame,
  Group,
  HamburgerIcon,
  HomeLink,
  Logo,
  Navigation,
  StyledButtonLink,
  TextLink,
} from "./styles/Header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Frame = React.forwardRef((props, ref) => (
  <Frame ref={ref}>{props.children}</Frame>
));

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.HomeLink = function HeaderHomeLink({ to, children, ...restProps }) {
  return (
    <HomeLink to={to} {...restProps}>
      {children}
    </HomeLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({
  to,
  themetype,
  size,
  children,
  ...restProps
}) {
  return (
    <StyledButtonLink to={to} themetype={themetype} size={size} {...restProps}>
      {children}
    </StyledButtonLink>
  );
};

Header.TextLink = function HeaderTextLink({ to, children, ...restProps }) {
  return (
    <TextLink to={to} {...restProps}>
      {children}
    </TextLink>
  );
};

Header.Navigation = function HeaderNavigation({ children, ...restProps }) {
  return <Navigation {...restProps}>{children}</Navigation>;
};

Header.HamburgerIcon = function HeaderHamburgerIcon({
  isDropdownOpen,
  onClick,
}) {
  return (
    <HamburgerIcon isDropdownOpen={isDropdownOpen} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </HamburgerIcon>
  );
};

Header.Dropdown = function HeaderDropdown() {
  return (
    <Dropdown>
      <Header.TextLink to={ROUTES.SIGN_IN} title="Sign In">
        Sign In
      </Header.TextLink>
      <Header.TextLink to={ROUTES.SIGN_UP} title="Sign Up">
        Sign Up
      </Header.TextLink>
    </Dropdown>
  );
};
