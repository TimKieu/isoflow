import { createTheme } from "@mui/material";

interface CustomThemeVars {
  sideNav: {
    width: number;
  };
  toolMenu: {
    height: number;
  };
}

declare module "@mui/material/styles" {
  interface Theme {
    customVars: CustomThemeVars;
  }

  interface ThemeOptions {
    customVars: CustomThemeVars;
  }
}

const customVars: CustomThemeVars = {
  sideNav: {
    width: 60,
  },
  toolMenu: {
    height: 55,
  },
};

export const theme = createTheme({
  customVars,
  typography: {
    h5: {
      fontSize: "1.3rem",
      lineHeight: 1.2,
    },
  },
  palette: {
    mode: "dark",
    secondary: {
      main: "#df004c",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
  },
});
