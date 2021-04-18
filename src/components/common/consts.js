export const getButtonStyleToken = (name, themetype, theme) => {
  const tokens = {
    textButton: {
      primaryPastelBlue: theme.colorText.button.primary.pastelBlue,
      secondaryPastelBlue: theme.colorText.button.secondary.pastelBlue,
      primaryGreen: theme.colorText.button.primary.green,
      secondaryGreen: theme.colorText.button.secondary.green,
    },
    textButtonHover: {
      primaryPastelBlue: theme.colorText.button.primary.pastelBlueHover,
      secondaryPastelBlue: theme.colorText.button.secondary.pastelBlueHover,
      primaryGreen: theme.colorText.button.primary.greenHover,
      secondaryGreen: theme.colorText.button.secondary.greenHover,
    },
    backgroundButton: {
      primaryPastelBlue: theme.background.button.primary.pastelBlue,
      secondaryPastelBlue: theme.background.button.secondary.pastelBlue,
      primaryGreen: theme.background.button.primary.green,
      secondaryGreen: theme.background.button.secondary.green,
    },
    backgroundButtonDisabled: {
      primaryPastelBlue: theme.background.button.primary.pastelBlueDisabled,
    },
    backgroundButtonHover: {
      primaryPastelBlue: theme.background.button.primary.pastelBlueHover,
      secondaryPastelBlue: theme.background.button.secondary.pastelBlueHover,
      primaryGreen: theme.background.button.primary.greenHover,
      secondaryGreen: theme.background.button.secondary.greenHover,
    },
    borderButton: {
      primaryPastelBlue: theme.border.button.primary.pastelBlue,
      secondaryPastelBlue: theme.border.button.secondary.pastelBlue,
      primaryGreen: theme.border.button.primary.green,
      secondaryGreen: theme.border.button.secondary.green,
    },
    borderButtonHover: {
      primaryPastelBlue: theme.border.button.primary.pastelBlueHover,
      secondaryPastelBlue: theme.border.button.secondary.pastelBlueHover,
      primaryGreen: theme.border.button.primary.greenHover,
      secondaryGreen: theme.border.button.secondary.greenHover,
    },
    borderButtonDisabled: {
      primaryPastelBlue: theme.border.button.primary.pastelBlueDisabled,
    },
    boxShadowButton: {
      primaryPastelBlue: "0px 2px 7px rgba(0, 0, 0, 0.1)",
      secondaryPastelBlue: "0px 2px 7px rgba(0, 0, 0, 0.1)",
    },
  };
  return tokens[name][themetype];
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
