import React from "react";
import { SidebarContainer } from "./Sidebar";

export function LayoutContainer(props) {
  return (
    <div style={{ display: "flex" }}>
      <SidebarContainer history={props.history} user={props.user} />
      <div style={{ maxWidth: "800px" }}>{props.children}</div>
    </div>
  );
}
