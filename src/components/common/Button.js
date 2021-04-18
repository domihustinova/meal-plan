import React from "react";
import styled, { css } from "styled-components/macro";
import { getButtonSizeToken, getButtonStyleToken } from "./consts";

const StyledButton = styled.button`
  width: ${(props) => getButtonSizeToken("widthButton", props.size)};
  height: ${(props) => getButtonSizeToken("heightButton", props.size)};
  padding: ${(props) => getButtonSizeToken("paddingButton", props.size)};
  font-size: ${(props) => getButtonSizeToken("fontSizeButton", props.size)};
  font-weight: ${(props) => getButtonSizeToken("fontWeightButton", props.size)};
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${(props) =>
    getButtonStyleToken("textButton", props.themetype, props.theme)};
  background-color: ${(props) =>
    getButtonStyleToken(
      props.disabled ? "backgroundButtonDisabled" : "backgroundButton",
      props.themetype,
      props.theme
    )};
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  border: 1px solid
    ${(props) =>
      getButtonStyleToken(
        props.disabled ? "borderButtonDisabled" : "borderButton",
        props.themetype,
        props.theme
      )};

  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  box-shadow: ${(props) =>
    getButtonStyleToken("boxShadowButton", props.themetype, props.theme)};
  outline: none;
  transition: all ${({ theme }) => theme.durationFast} ease-in-out;

  ${(props) =>
    !props.disabled &&
    css`
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
            getButtonStyleToken(
              "borderButtonHover",
              props.themetype,
              props.theme
            )};
      }
    `}
`;

export const Button = ({
  themetype,
  size,
  disabled = false,
  onClick,
  ariaLabel,
  children,
  ...restProps
}) => {
  return (
    <StyledButton
      disabled={disabled}
      themetype={themetype}
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
