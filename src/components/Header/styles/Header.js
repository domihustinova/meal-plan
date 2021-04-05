import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import ButtonLink from "../../common/ButtonLink";

export const Container = styled.header`
  display: flex;
  background: #fff;
  flex-direction: column;
  position: relative;
  z-index: 100;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  a {
    outline: none;
  }
`;

export const Frame = styled.div`
  display: flex;
  width: 100%;
  max-width: 1125px;
  margin: 0 auto;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 36px;
  width: 36px;
  margin-right: 10px;
  cursor: pointer;
`;

export const HomeLink = styled(ReactRouterLink)`
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2px;

  color: ${({ theme }) => theme.colorText.link.navbar.home};
  outline: none;
  transition: 0.4s;

  &:hover,
  &:focus {
    outline: none;
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  margin-left: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const HamburgerIcon = styled.button`
  color: ${({ theme }) => theme.navbar.hamburger};
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  padding: 0;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, isDropdownOpen }) =>
      isDropdownOpen ? theme.navbar.hamburgerHover : theme.navbar.hamburger};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isDropdownOpen }) =>
        isDropdownOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ isDropdownOpen }) => (isDropdownOpen ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ isDropdownOpen }) =>
        isDropdownOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

export const Dropdown = styled.div`
  background: #fff;
  height: 102px;

  a {
    display: block;
    border-bottom: 1px solid #e8e9eb;
    padding: 15px 30px;
    text-align: center;

    :nth-of-type(1) {
      border-top: 1px solid #e8e9eb;
    }
  }
`;

export const TextLink = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.colorText.link.pastelBlue};
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.05em;
  text-decoration: none;
  cursor: pointer;

  outline: none;
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colorText.link.pastelBlueHover};
  }
`;
