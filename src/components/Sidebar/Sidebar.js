import React from "react";
import { Icon } from "@iconify/react";

import { Container, Group, Item, ItemGroup, ItemIcon } from "./styles/Sidebar";

export default function Sidebar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sidebar.Group = function SidebarGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Sidebar.ItemGroup = function SidebarItemGroup({ children, ...restProps }) {
  return <ItemGroup {...restProps}>{children}</ItemGroup>;
};

Sidebar.Item = function SidebarItem({ to, children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Sidebar.ItemIcon = function SidebarItemIcon({ icon, rotate, selected }) {
  return (
    <ItemIcon selected={selected}>
      <Icon icon={icon} rotate={rotate} height={20} />
    </ItemIcon>
  );
};
