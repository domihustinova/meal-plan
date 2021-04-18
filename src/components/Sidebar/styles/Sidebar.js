import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  background: ${({ theme }) => theme.background.sidebar};

  a {
    display: block;
    text-decoration: none;
  }

  & > div {
    width: 300px;
    height: 100vh;
  }
`;

export const Frame = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const Group = styled.div``;

export const Title = styled.h3`
  padding: 48px 48px;
  padding-bottom: 0;
  text-align: center;
`;

export const Item = styled(ReactRouterLink)`
  color: ${(props) =>
    props.selected
      ? props.theme.colorText.link.sidebarSelected
      : props.theme.colorText.link.sidebar};
  padding: 14px 24px;
  border-radius: 30px;
  margin-bottom: 10px;
  background: ${(props) => (props.selected ? "#fff" : "")};
  font-weight: 400;
  text-decoration: none;
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colorText.link.sidebarHover};
  }
`;

export const ItemIcon = styled.span`
  margin-right: 24px;
  color: ${({ theme }) => theme.sidebar.icon};
`;

export const LogoutLink = styled.a`
  color: ${({ theme }) => theme.colorText.link.sidebar};
  padding: 14px 24px;
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colorText.link.sidebarHover};
  }
`;
