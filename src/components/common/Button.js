import React from "react";
import styled from "styled-components/macro";

const getButtonStyleToken = (name, type, theme) => {
  const tokens = {
    textButton: {
      primaryPastelBlue: theme.colorTextButtonPrimaryPastelBlue,
      secondaryPastelBlue: theme.colorTextButtonSecondaryPastelBlue,
    },
    textButtonHover: {
      primaryPastelBlue: theme.colorTextButtonPrimaryPastelBlueHover,
      secondaryPastelBlue: theme.colorTextButtonSecondaryPastelBlueHover,
    },
    backgroundButton: {
      primaryPastelBlue: theme.backgroundButtonPrimaryPastelBlue,
      secondaryPastelBlue: theme.backgroundButtonSecondaryPastelBlue,
    },
    backgroundButtonHover: {
      primaryPastelBlue: theme.backgroundButtonPrimaryPastelBlueHover,
      secondaryPastelBlue: theme.backgroundButtonSecondaryPastelBlueHover,
    },
    borderButton: {
      primaryPastelBlue: theme.borderColorButtonPrimaryPastelBlue,
      secondaryPastelBlue: theme.borderColorButtonSecondaryPastelBlue,
    },
    borderButtonHover: {
      primaryPastelBlue: theme.borderColorButtonPrimaryPastelBlueHover,
      secondaryPastelBlue: theme.borderColorButtonSecondaryPastelBlueHover,
    },
    boxShadowButton: {
      primaryPastelBlue: "0px 2px 7px rgba(0, 0, 0, 0.1)",
      secondaryPastelBlue: "0px 2px 7px rgba(0, 0, 0, 0.1)",
    },
  };
  return tokens[name][type];
};

const getButtonSizeToken = (name, size) => {
  const tokens = {
    widthButton: {
      normal: "120px",
    },
    heightButton: {
      normal: "44px",
    },
    fontSizeButton: {
      normal: "14px",
    },
    fontWeightButton: {
      normal: "700",
    },
    paddingButton: {
      normal: "0.75rem",
    },
  };
  return tokens[name][size];
};

const StyledButtonLink = styled.a`
  width: ${(props) => getButtonSizeToken("widthButton", props.size)};
  height: ${(props) => getButtonSizeToken("heightButton", props.size)};
  padding: ${(props) => getButtonSizeToken("paddingButton", props.size)};
  font-size: ${(props) => getButtonSizeToken("fontSizeButton", props.size)};
  font-weight: ${(props) => getButtonSizeToken("fontWeightButton", props.size)};
  color: ${(props) =>
    getButtonStyleToken("textButton", props.type, props.theme)};
  background-color: ${(props) =>
    getButtonStyleToken("backgroundButton", props.type, props.theme)};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid
    ${(props) => getButtonStyleToken("borderButton", props.type, props.theme)};

  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  box-shadow: ${(props) =>
    getButtonStyleToken("boxShadowButton", props.type, props.theme)};
  outline: none;
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    color: ${(props) =>
      getButtonStyleToken("textButtonHover", props.type, props.theme)};
    background-color: ${(props) =>
      getButtonStyleToken("backgroundButtonHover", props.type, props.theme)};
    border: 1px solid
      ${(props) =>
        getButtonStyleToken("borderButtonHover", props.type, props.theme)};
  }
`;

const Button = ({
  type,
  size,
  href,
  onClick,
  ariaLabel,
  children,
  ...restProps
}) => {
  return (
    <StyledButtonLink
      type={type}
      size={size}
      href={href}
      onClick={onClick}
      onKeyPress={onClick}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={0}
      aria-label={ariaLabel}
      {...restProps}
    >
      {children}
    </StyledButtonLink>
  );
};

export default Button;
