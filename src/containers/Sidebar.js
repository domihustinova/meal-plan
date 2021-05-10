import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { Link as ReactRouterLink } from "react-router-dom";
import logoutLine from "@iconify-icons/majesticons/logout-line";

import { Sidebar } from "../components/";
import { SIDEBAR_ITEMS } from "../constants/sidebarItems";

export function SidebarContainer({ history, user }) {
  const { firebase } = useContext(FirebaseContext);
  const location = history.location.pathname;

  const handleLogout = () => {
    return firebase
      .auth()
      .signOut()

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Sidebar>
      <div style={{ position: "fixed" }}>
        <Sidebar.Group>
          {SIDEBAR_ITEMS.map((item) => (
            <ReactRouterLink key={item.name} to={item.route} title={item.name}>
              <Sidebar.ItemGroup selected={item.route === location}>
                <Sidebar.ItemIcon icon={item.icon} />
                <Sidebar.Item>{item.name}</Sidebar.Item>
              </Sidebar.ItemGroup>
            </ReactRouterLink>
          ))}
          <Sidebar.ItemGroup onClick={handleLogout} title="Logout">
            <Sidebar.ItemIcon icon={logoutLine} rotate="180deg" />
            <Sidebar.Item>Logout</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Group>
      </div>
      <div />
    </Sidebar>
  );
}
