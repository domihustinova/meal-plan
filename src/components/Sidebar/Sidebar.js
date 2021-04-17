import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  Frame,
  Group,
  Item,
  ItemIcon,
  LogoutLink,
  Title,
} from "./styles/Sidebar";

export default function Sidebar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sidebar.Frame = function SidebarFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Sidebar.Title = function SidebarTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Sidebar.Group = function SidebarGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Sidebar.Item = function SidebarItem({ to, children, ...restProps }) {
  return (
    <Item to={to} {...restProps}>
      {children}
    </Item>
  );
};

Sidebar.ItemIcon = function SidebarItemIcon({ icon, selected }) {
  return (
    <ItemIcon selected={selected}>
      <FontAwesomeIcon icon={icon} />
    </ItemIcon>
  );
};

Sidebar.LogoutLink = function SidebarLogoutLink({ children, ...restProps }) {
  return (
    <LogoutLink {...restProps}>
      <ItemIcon>
        <FontAwesomeIcon icon="sign-out-alt" />
      </ItemIcon>
      {children}
    </LogoutLink>
  );
};
