import { createTheme } from "@mui/material";

export const theme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#f4f4f8",
              b1: "#fff",
              b2: "#e1ecc7",
              b3: "#f7ffe5",
              autofill: "#f4f4f8",
            },
            primary: {
              main: "#007D53",
              light: "#007E92",
              dark: "#09a16b",
              border: "rgb(241, 243, 244)",
              svg: "#000",
              scrollbar: "#c4c4c4",
            },
          }
        : {
            background: {
              default: "#232333",
              b1: "#2b2c40",
              b2: "#2b2c40",
              autofill: "#232333",
            },
            primary: {
              main: "#1BB385",
              border: "rgb(46, 50, 54)",
              light: "#189AB4",
              dark: "#009766",
              scrollbar: "#626585",
            },
            secondary: {
              main: "#2e3d4b",
            },
          }),
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: {
              variant: "contained",
              disableRipple: true,
            },
          },
        ],
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
          },
        },
      },
    },
  });
