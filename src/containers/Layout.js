import React from "react";
import styled from "styled-components";
import { SidebarContainer } from "./Sidebar";

export const Layout = styled.main`
  display: flex;
  background-color: rgb(251, 251, 251);
`;

export const LayoutChildren = styled.div`
  max-width: "800px";
`;

export function LayoutContainer(props) {
  return (
    <Layout>
      <SidebarContainer history={props.history} user={props.user} />
      <LayoutChildren>{props.children}</LayoutChildren>
    </Layout>
  );
}
