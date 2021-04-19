import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  margin-top: 0px;
  margin-bottom: 24px;
  line-height: ${({ theme }) => theme.lineHeightLarge}; ;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colorText.link.green};
  outline: none;
  transition: 0.4s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colorText.link.greenHover};
    text-decoration: underline;
  }
`;
