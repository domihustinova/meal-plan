import styled from "styled-components/macro";

export const Container = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.backgroundFooter};
  overflow: hidden;
  padding: 24px;
  text-align: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colorTextFooter};
  font-size: 12px;
  font-weight: 400;

  a {
    color: ${({ theme }) => theme.colorTextLinkFooter};
    outline: none;
    transition: 0.4s;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colorTextLinkFooterHover};
    }
  }
`;
