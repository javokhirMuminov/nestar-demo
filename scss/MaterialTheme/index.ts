import { ThemeOptions, createTheme } from "@mui/material/styles";

export const light: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
    primary: {
      contrastText: "#fff",
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
    text: {
      primary: "#000",
      secondary: "#757575",
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          textAlign: "left",
        },
      },
    },
  },
  shadows: [
    "none",
    "0px 1px 3px rgba(0, 0, 0, 0.2)",
    "0px 1px 5px rgba(0, 0, 0, 0.14)",
    "0px 1px 8px rgba(0, 0, 0, 0.12)",
    "0px 2px 4px rgba(0, 0, 0, 0.2)",
    "0px 3px 5px rgba(0, 0, 0, 0.14)",
    "0px 3px 8px rgba(0, 0, 0, 0.12)",
    "0px 4px 6px rgba(0, 0, 0, 0.2)",
    "0px 5px 7px rgba(0, 0, 0, 0.14)",
    "0px 5px 10px rgba(0, 0, 0, 0.12)",
    "0px 6px 8px rgba(0, 0, 0, 0.2)",
    "0px 7px 9px rgba(0, 0, 0, 0.14)",
    "0px 7px 12px rgba(0, 0, 0, 0.12)",
    "0px 8px 10px rgba(0, 0, 0, 0.2)",
    "0px 9px 11px rgba(0, 0, 0, 0.14)",
    "0px 9px 14px rgba(0, 0, 0, 0.12)",
    "0px 10px 12px rgba(0, 0, 0, 0.2)",
    "0px 11px 13px rgba(0, 0, 0, 0.14)",
    "0px 11px 16px rgba(0, 0, 0, 0.12)",
    "0px 12px 14px rgba(0, 0, 0, 0.2)",
    "0px 13px 15px rgba(0, 0, 0, 0.14)",
    "0px 13px 18px rgba(0, 0, 0, 0.12)",
    "0px 14px 16px rgba(0, 0, 0, 0.2)",
    "0px 15px 17px rgba(0, 0, 0, 0.14)",
    "0px 15px 20px rgba(0, 0, 0, 0.12)"
  ],
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
};

export default createTheme(light);