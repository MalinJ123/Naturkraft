"use client";

import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const juraFont = localFont({
  src: "../fonts/Jura.ttf",
  weights: [300, 400, 500, 700],
  subsets: ["latin-ext"],
  display: "swap",
});

export const mainTheme = createTheme({
  typography: {
    fontFamily: juraFont.style.fontFamily,
    lineHeight: 1.8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: juraFont.style.fontFamily,
        },
      },
    },
  },
  palette: {
    opacityLight: {
      main: "rgba(255, 255, 255, 0.90)",
      contrastText: "#000",
    },
    opacityDark: {
      main: "rgba(0, 0, 0, 0.90)",
      contrastText: "#fff",
    },
    wrapper: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});
