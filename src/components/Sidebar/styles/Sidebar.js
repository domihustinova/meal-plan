import styled from "styled-components/macro";

export const Container = styled.div`
  background: ${({ theme }) => theme.background.sidebar};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  a {
    display: block;
    text-decoration: none;
  }

  & > div {
    width: 125px;
    height: 100vh;
  }
`;

export const Group = styled.div`
  padding: 15px;
  margin-top: 20px;
`;

export const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-weight: 500;
  background: ${(props) =>
    props.selected
      ? props.theme.background.sidebarItemSelected
      : props.theme.background.sidebarItem};
  color: ${(props) =>
    props.selected
      ? props.theme.colorText.link.sidebarSelected
      : props.theme.colorText.link.sidebar};
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colorText.link.sidebarHover};
    cursor: pointer;
  }
`;

export const Item = styled.span`
  text-align: center;
  font-size: 12px;
  text-decoration: none;
`;

export const ItemIcon = styled.span`
  margin-bottom: 3px;
  font-weight: 700;
`;
