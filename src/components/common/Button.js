import React from "react";
import styled from "styled-components/macro";
import { getButtonSizeToken, getButtonStyleToken } from "./consts";

const StyledButton = styled.button`
  width: ${(props) => getButtonSizeToken("widthButton", props.size)};
  height: ${(props) => getButtonSizeToken("heightButton", props.size)};
  padding: ${(props) => getButtonSizeToken("paddingButton", props.size)};
  font-size: ${(props) => getButtonSizeToken("fontSizeButton", props.size)};
  font-weight: ${(props) => getButtonSizeToken("fontWeightButton", props.size)};
  color: ${(props) =>
    getButtonStyleToken("textButton", props.themeType, props.theme)};
  background-color: ${(props) =>
    getButtonStyleToken("backgroundButton", props.themeType, props.theme)};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid
    ${(props) =>
      getButtonStyleToken("borderButton", props.themeType, props.theme)};

  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  box-shadow: ${(props) =>
    getButtonStyleToken("boxShadowButton", props.themeType, props.theme)};
  outline: none;
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    color: ${(props) =>
      getButtonStyleToken("textButtonHover", props.themeType, props.theme)};
    background-color: ${(props) =>
      getButtonStyleToken(
        "backgroundButtonHover",
        props.themeType,
        props.theme
      )};
    border: 1px solid
      ${(props) =>
        getButtonStyleToken("borderButtonHover", props.themeType, props.theme)};
  }
`;

const Button = ({
  themeType,
  size,
  onClick,
  ariaLabel,
  children,
  ...restProps
}) => {
  return (
    <StyledButton
      themeType={themeType}
      size={size}
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      aria-label={ariaLabel}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
