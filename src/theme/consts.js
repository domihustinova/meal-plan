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
    lightest: "#f4f6f3",
    lighter: "#EBF4EC",
    light: "#72be6c",
    normal: "#46b04a",
    bright: "#28A138",
    dark: "#2B7336",
    darker: "#235C2B",
  },
  darkGreen: {
    light: "#83867e",
    normal: "#344138",
  },
  orange: {
    lighter: "#fcf0e4",
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
    lighter: "#7f8388",
    light: "#999999",
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
  borderRadiusSmall: "10px",
  borderRadiusNormal: "0.9375rem", // 15px
  fontWeightNormal: "400",
  fontWeightMedium: "500",
  fontWeightBold: "700",
  durationFast: "0.25s",
  durationNormal: "0.3s",
  transitionDefault: "ease-in-out",
  lineHeightNormal: "1.3",
  lineHeightLarge: "1.6",
};

export const theme = {
  colorText: {
    primary: palette.ink.normal,
    error: palette.red.normal,
    placeholder: palette.ink.lighter,
    footer: palette.white.normal,
    link: {
      navbar: {
        home: palette.ink.dark,
      },
      green: palette.green.normal,
      greenHover: palette.green.light,
      sidebar: palette.ink.lighter,
      sidebarSelected: palette.orange.normal,
      sidebarHover: palette.orange.normal,
      form: palette.pastelBlue.dark,
      formHover: palette.pastelBlue.lighter,
      footer: palette.pastelBlue.lighter,
      footerHover: palette.white.normal,
      pastelBlue: palette.pastelBlue.dark,
      pastelBlueHover: palette.blue.dark,
    },
    textButton: {
      profile: palette.ink.lighter,
      profileEdit: palette.green.normal,
      profileSelected: palette.green.normal,
      profileHover: palette.green.normal,
    },
    button: {
      primary: {
        pastelBlue: palette.white.normal,
        pastelBlueHover: palette.white.normal,
        green: palette.white.normal,
        greenHover: palette.white.normal,
      },
      secondary: {
        pastelBlue: palette.pastelBlue.dark,
        pastelBlueHover: palette.pastelBlue.lighter,
        green: palette.green.normal,
        greenHover: palette.green.light,
      },
    },
  },
  background: {
    body: palette.white.normal,
    hero: palette.yellow.lighter,
    main: palette.orange.lighter,
    sidebar: palette.white.normal,
    sidebarItem: palette.white.normal,
    sidebarItemSelected: palette.orange.lighter,
    footer: palette.pastelBlue.normal,
    button: {
      primary: {
        pastelBlue: palette.pastelBlue.dark,
        pastelBlueHover: palette.pastelBlue.light,
        pastelBlueDisabled: palette.pastelBlue.light,
        green: palette.green.normal,
        greenHover: palette.green.light,
        greenDisabled: palette.green.light,
      },
      secondary: {
        pastelBlue: palette.white.normal,
        pastelBlueHover: palette.white.normal,
        green: palette.white.normal,
        greenHover: palette.white.normal,
      },
    },
  },
  border: {
    input: {
      pastelBlue: palette.pastelBlue.normal,
      green: palette.green.normal,
    },
    inputHover: {
      pastelBlue: palette.pastelBlue.normal,
      green: palette.green.normal,
    },
    button: {
      primary: {
        pastelBlue: palette.pastelBlue.dark,
        pastelBlueHover: palette.pastelBlue.light,
        pastelBlueDisabled: palette.pastelBlue.light,
        green: palette.green.normal,
        greenHover: palette.green.light,
        greenDisabled: palette.green.light,
      },
      secondary: {
        pastelBlue: palette.pastelBlue.dark,
        pastelBlueHover: palette.pastelBlue.lighter,
        green: palette.green.normal,
        greenHover: palette.green.light,
      },
    },
  },
  navbar: {
    hamburger: palette.pastelBlue.dark,
    hamburgerHover: palette.pastelBlue.normal,
  },
  sidebar: {
    icon: palette.green.normal,
  },
  ...base,
};
