import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Header } from "../components/";
import logo from "../images/logo.png";
import { useWindowSize } from "../services/hooks";

export function HeaderContainer() {
  const windowSize = useWindowSize();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isMobile = windowSize.width < 769;
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Header>
      <Header.Frame>
        <Header.Group>
          <Header.Logo src={logo} title="MealPal" alt="MealPal" />
          <Header.HomeLink title="MealPal">MealPal</Header.HomeLink>
        </Header.Group>

        {isMobile ? (
          <Header.HamburgerIcon
            onClick={toggleDropdown}
            aria-label="Open dropdown menu"
          >
            <FontAwesomeIcon icon={faBars} aria-hidden="true" />
          </Header.HamburgerIcon>
        ) : (
          <Header.Navigation>
            <Header.ButtonLink
              type="secondaryPastelBlue"
              size="normal"
              title="Sign In"
            >
              Sign In
            </Header.ButtonLink>
            <Header.ButtonLink
              type="primaryPastelBlue"
              size="normal"
              title="Sign Up"
            >
              Sign Up
            </Header.ButtonLink>
          </Header.Navigation>
        )}
      </Header.Frame>
      {isMobile && isDropdownOpen && (
        <Header.Dropdown toggleDropdown={toggleDropdown} />
      )}
    </Header>
  );
}
