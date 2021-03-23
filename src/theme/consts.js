// palette
const palette = {
  pastelBlue: {
    lighter: "#8eb1ee", // rgb(142, 177, 238)
    light: "#517fbe", // rgb(81, 127, 190) logo
    normal: "#4d6db1", // rgb(77, 109, 177)
    dark: "#3961aa", // rgb(57, 97, 170) darker logo
    darker: "#3b5284",
  },
  blue: {
    light: "#0d45e6",
    normal: "#002ba3",
    dark: "#05206b",
  },
  turquoise: {
    light: "#6ebba6",
    normal: "#518c7d",
    dark: "#244552",
  },
  green: {
    light: "#EBF4EC",
    normal: "#28A138",
    dark: "#2B7336",
    darker: "#235C2B",
  },
  orange: {
    lighter: "#faf0e5",
    light: "#eba796",
    normal: "#e69183",
    dark: "#e37b5f",
  },
  yellow: {
    light: "#f8f4dd",
    normal: "#f6e0b8",
    dark: "#f0cc89",
  },
  red: {
    normal: "#cf3e35",
  },
  white: {
    normal: "#fff",
  },
  cloud: {
    light: "#f7f8fa",
    normal: "#eff2f5",
    dark: "#e2e6ea",
  },
  ink: {
    light: "#7f8388",
    normal: "#333333",
    dark: "#000",
  },
};

const base = {
  fontFamily: "'Poppins', sans-serif;",
  fontSizeExtraSmall: "0.75rem", // 12px
  fontSizeSmall: "0.875rem", // 14px
  fontSizeMedium: "1rem", // 16px
  borderRadiusNormal: "15px",
  fontWeightNormal: "400",
  fontWeightMedium: "500",
  fontWeightBold: "700",
  durationFast: "0.15s",
  durationNormal: "0.3s",
  transitionDefault: "ease-in-out",
  lineHeight: "1.3",
};

export const theme = {
  // Text colors
  colorTextPrimary: palette.ink.normal,
  colorTextError: palette.red.normal,
  colorTextButtonPrimaryPastelBlue: palette.white.normal,
  colorTextButtonPrimaryPastelBlueHover: palette.white.normal,
  colorTextButtonSecondaryPastelBlue: palette.pastelBlue.dark,
  colorTextButtonSecondaryPastelBlueHover: palette.pastelBlue.lighter,
  colorTextLinkPastelBlue: palette.pastelBlue.dark,
  colorTextLinkPastelBlueHover: palette.blue.dark,
  // Background colors
  backgroundBody: palette.cloud.light,
  backgroundButtonPrimaryPastelBlue: palette.pastelBlue.dark,
  backgroundButtonPrimaryPastelBlueHover: palette.pastelBlue.normal,
  backgroundButtonSecondaryPastelBlue: palette.white.normal,
  backgroundButtonSecondaryPastelBlueHover: palette.white.normal,
  // Border colors
  borderColorButtonPrimaryPastelBlue: palette.pastelBlue.dark,
  borderColorButtonPrimaryPastelBlueHover: palette.pastelBlue.normal,
  borderColorButtonSecondaryPastelBlue: palette.pastelBlue.dark,
  borderColorButtonSecondaryPastelBlueHover: palette.pastelBlue.lighter,
  // Other
  colorNavbarHamburger: palette.pastelBlue.dark,
  colorNavbarHamburgerHover: palette.pastelBlue.normal,
  ...base,
};
