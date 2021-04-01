import React, { useState, useRef } from "react";

import { Header } from "../components/";
import logo from "../images/logo.png";
import { useWindowSize, useOnClickOutside } from "../services/hooks";

export function HeaderContainer() {
  const windowSize = useWindowSize();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isMobile = windowSize.width < 1110;
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setIsDropdownOpen(false));

  return (
    <Header>
      <Header.Frame ref={ref}>
        <Header.Group>
          <Header.Logo src={logo} title="MealPal" alt="MealPal" />
          <Header.HomeLink title="MealPal">MealPal</Header.HomeLink>
        </Header.Group>

        {isMobile ? (
          <Header.HamburgerIcon
            isDropdownOpen={isDropdownOpen}
            onClick={toggleDropdown}
            aria-label="Open dropdown menu"
          />
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
