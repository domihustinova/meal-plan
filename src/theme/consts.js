// palette
const palette = {
  pastelBlue: {
    light: "#8eb1ee",
    normal: "#4d6db1",
    dark: "#3b5284",
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
  borderRadius: "3px",
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
  ...base,
};
