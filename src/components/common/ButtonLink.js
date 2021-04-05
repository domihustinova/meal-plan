import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { getButtonSizeToken, getButtonStyleToken } from "./consts";

const StyledButtonLink = styled(Link)`
  width: ${(props) => getButtonSizeToken("widthButton", props.size)};
  height: ${(props) => getButtonSizeToken("heightButton", props.size)};
  padding: ${(props) => getButtonSizeToken("paddingButton", props.size)};
  font-size: ${(props) => getButtonSizeToken("fontSizeButton", props.size)};
  font-weight: ${(props) => getButtonSizeToken("fontWeightButton", props.size)};
  color: ${(props) =>
    getButtonStyleToken("textButton", props.themetype, props.theme)};
  background-color: ${(props) =>
    getButtonStyleToken("backgroundButton", props.themetype, props.theme)};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid
    ${(props) =>
      getButtonStyleToken("borderButton", props.themetype, props.theme)};

  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  box-shadow: ${(props) =>
    getButtonStyleToken("boxShadowButton", props.themetype, props.theme)};
  outline: none;
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    color: ${(props) =>
      getButtonStyleToken("textButtonHover", props.themetype, props.theme)};
    background-color: ${(props) =>
      getButtonStyleToken(
        "backgroundButtonHover",
        props.themetype,
        props.theme
      )};
    border: 1px solid
      ${(props) =>
        getButtonStyleToken("borderButtonHover", props.themetype, props.theme)};
  }
`;

const ButtonLink = ({
  to,
  themetype,
  size,
  href,
  onClick,
  ariaLabel,
  children,
  ...restProps
}) => {
  return (
    <StyledButtonLink
      to={to}
      themetype={themetype}
      size={size}
      href={href}
      onClick={onClick}
      onKeyPress={onClick}
      rel="noopener noreferrer"
      tabIndex={0}
      aria-label={ariaLabel}
      {...restProps}
    >
      {children}
    </StyledButtonLink>
  );
};

export default ButtonLink;
