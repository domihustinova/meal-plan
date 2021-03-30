import React, { useState, useRef } from "react";

import { Header } from "../components/";
import logo from "../images/logo.png";
import * as ROUTES from "../constants/routes";
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
          <Header.Logo
            to={ROUTES.HOME}
            src={logo}
            title="MealPal"
            alt="MealPal"
          />
          <Header.HomeLink to={ROUTES.HOME} title="MealPal">
            MealPal
          </Header.HomeLink>
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
              to={ROUTES.SIGN_IN}
              themeType="secondaryPastelBlue"
              size="normal"
              title="Sign In"
            >
              Sign In
            </Header.ButtonLink>
            <Header.ButtonLink
              to={ROUTES.SIGN_UP}
              themeType="primaryPastelBlue"
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
