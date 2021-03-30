import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

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

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
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

Header.Dropdown = function HeaderDropdown({ toggleDropdown }) {
  return (
    <Dropdown>
      <Header.TextLink title="Sign In" onClick={toggleDropdown}>
        Sign In
      </Header.TextLink>
      <Header.TextLink title="Sign Up" onClick={toggleDropdown}>
        Sign Up
      </Header.TextLink>
    </Dropdown>
  );
};
