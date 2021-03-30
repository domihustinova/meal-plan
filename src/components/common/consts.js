export const getButtonStyleToken = (name, themeType, theme) => {
  const tokens = {
    textButton: {
      primaryPastelBlue: theme.colorText.button.primary.pastelBlue,
      secondaryPastelBlue: theme.colorText.button.secondary.pastelBlue,
    },
    textButtonHover: {
      primaryPastelBlue: theme.colorText.button.primary.pastelBlueHover,
      secondaryPastelBlue: theme.colorText.button.secondary.pastelBlueHover,
    },
    backgroundButton: {
      primaryPastelBlue: theme.background.button.primary.pastelBlue,
      secondaryPastelBlue: theme.background.button.secondary.pastelBlue,
    },
    backgroundButtonHover: {
      primaryPastelBlue: theme.background.button.primary.pastelBlueHover,
      secondaryPastelBlue: theme.background.button.secondary.pastelBlueHover,
    },
    borderButton: {
      primaryPastelBlue: theme.border.button.primary.pastelBlue,
      secondaryPastelBlue: theme.border.button.secondary.pastelBlue,
    },
    borderButtonHover: {
      primaryPastelBlue: theme.border.button.primary.pastelBlueHover,
      secondaryPastelBlue: theme.border.button.secondary.pastelBlueHover,
    },
    boxShadowButton: {
      primaryPastelBlue: "0px 2px 7px rgba(0, 0, 0, 0.1)",
      secondaryPastelBlue: "0px 2px 7px rgba(0, 0, 0, 0.1)",
    },
  };
  return tokens[name][themeType];
};

export const getButtonSizeToken = (name, size) => {
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
