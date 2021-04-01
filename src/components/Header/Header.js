import React from "react";

import {
  ButtonLink,
  Container,
  Dropdown,
  Frame,
  Group,
  HamburgerIcon,
  HomeLink,
  Logo,
  Navigation,
  TextLink,
} from "./styles/Header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Frame = React.forwardRef((props, ref) => (
  <Frame ref={ref}>{props.children}</Frame>
));

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
