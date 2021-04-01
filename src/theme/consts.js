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
    lighter: "#fffdf5",
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

// 640px, 1110px, 1400px
export const breakpoint = {
  medium: "40em",
  large: "69.375em",
  xlarge: "87.5em",
};

export const MEDIA_QUERY = {
  MIN_MEDIUM: `(min-width: ${breakpoint.medium})`,
  MIN_LARGE: `(min-width: ${breakpoint.large})`,
  MIN_XLARGE: `(min-width: ${breakpoint.xlarge})`,
};

const base = {
  fontFamily: "'Poppins', sans-serif;",
  fontSizeExtraSmall: "0.75rem", // 12px
  fontSizeSmall: "0.875rem", // 14px
  fontSizeMedium: "1rem", // 16px
  borderRadiusNormal: "0.9375rem", // 15px
  fontWeightNormal: "400",
  fontWeightMedium: "500",
  fontWeightBold: "700",
  durationFast: "0.15s",
  durationNormal: "0.3s",
  transitionDefault: "ease-in-out",
  lineHeightNormal: "1.3",
  lineHeightLarge: "1.6",
};

export const theme = {
  colorText: {
    primary: palette.ink.normal,
    error: palette.red.normal,
    footer: palette.white.normal,
    link: {
      footer: palette.pastelBlue.lighter,
      footerHover: palette.white.normal,
      pastelBlue: palette.pastelBlue.dark,
      pastelBlueHover: palette.blue.dark,
    },
    button: {
      primary: {
        pastelBlue: palette.white.normal,
        pastelBlueHover: palette.white.normal,
      },
      secondary: {
        pastelBlue: palette.pastelBlue.dark,
        pastelBlueHover: palette.pastelBlue.lighter,
      },
    },
  },
  background: {
    body: palette.white.normal,
    hero: palette.yellow.lighter,
    footer: palette.pastelBlue.normal,
    button: {
      primary: {
        pastelBlue: palette.pastelBlue.dark,
        pastelBlueHover: palette.pastelBlue.light,
      },
      secondary: {
        pastelBlue: palette.white.normal,
        pastelBlueHover: palette.white.normal,
      },
    },
  },
  border: {
    button: {
      primary: {
        pastelBlue: palette.pastelBlue.dark,
        pastelBlueHover: palette.pastelBlue.light,
      },
      secondary: {
        pastelBlue: palette.pastelBlue.dark,
        pastelBlueHover: palette.pastelBlue.lighter,
      },
    },
  },
  navbar: {
    hamburger: palette.pastelBlue.dark,
    hamburgerHover: palette.pastelBlue.normal,
  },
  ...base,
};
