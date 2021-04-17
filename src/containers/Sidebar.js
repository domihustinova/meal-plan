import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";

import { Sidebar } from "../components/";
import { SIDEBAR_ITEMS } from "../constants/sidebarItems";

export function SidebarContainer({ history, user, defaultActive }) {
  const { firebase } = useContext(FirebaseContext);
  const location = history.location;
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(
    lastActiveIndex || Number(defaultActive)
  );

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(() => {
    const activeItem = SIDEBAR_ITEMS.findIndex(
      (item) => getPath(item.route) === getPath(location.pathname)
    );
    changeActiveIndex(activeItem);
  }, [location]);

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
            {SIDEBAR_ITEMS.map((item, index) => (
              <Sidebar.Item
                key={item.name}
                to={item.route}
                title={item.name}
                selected={index === activeIndex}
              >
                <Sidebar.ItemIcon
                  icon={item.icon}
                  selected={index === activeIndex}
                />
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
      <div className="behind-the-scenes" />
    </Sidebar>
  );
}
