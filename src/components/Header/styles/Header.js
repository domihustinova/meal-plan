import styled from "styled-components/macro";
import Button from "../../common/Button";

export const Container = styled.header`
  display: flex;
  background: #fff;
  flex-direction: column;
  position: relative;
  z-index: 100;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
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
  cursor: pointer;
  margin-right: 10px;
`;

export const HomeLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const ButtonLink = styled(Button)`
  margin-left: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const HamburgerIcon = styled.button`
  color: ${({ theme }) => theme.colorNavbarHamburger};
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
      isDropdownOpen
        ? theme.colorNavbarHamburgerHover
        : theme.colorNavbarHamburger};
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

export const TextLink = styled.a`
  color: ${({ theme }) => theme.colorTextLinkPastelBlue};
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.05em;
  text-decoration: none;
  cursor: pointer;

  outline: none;
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colorTextLinkPastelBlueHover};
  }
`;
