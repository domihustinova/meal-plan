import styled from "styled-components/macro";
import Button from "../../common/Button";

export const Container = styled.header`
  display: flex;
  background: #fff;
  flex-direction: column;
`;

export const Frame = styled.div`
  display: flex;
  width: 100%;
  max-width: 69.375rem;
  margin: 0 auto;
  padding: 15px;
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
  background-color: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colorNavbarHamburgerHover};
  }
`;

export const Dropdown = styled.div`
  background: #fff;
  height: 100px;

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
