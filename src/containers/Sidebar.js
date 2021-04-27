import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";

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
        <Sidebar.Title>Hello, {user.displayName}</Sidebar.Title>
        <Sidebar.Frame>
          <Sidebar.Group>
            {SIDEBAR_ITEMS.map((item) => (
              <Sidebar.Item
                key={item.name}
                to={item.route}
                title={item.name}
                selected={item.route === location}
              >
                <Sidebar.ItemIcon icon={item.icon} />
                {item.name}
              </Sidebar.Item>
            ))}
          </Sidebar.Group>

          <Sidebar.Group>
            <Sidebar.LogoutLink onClick={handleLogout}>
              Logout
            </Sidebar.LogoutLink>
          </Sidebar.Group>
        </Sidebar.Frame>
      </div>
      <div />
    </Sidebar>
  );
}
