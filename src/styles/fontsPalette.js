"use client";

import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

export const poppinsFont = localFont({
  src: "../fonts/Poppins.ttf",
  weights: [300, 400, 500, 700],
  subsets: ["latin-ext"],
  display: "swap",
});

export const robotoFont = localFont({
  src: "../fonts/Roboto.ttf",
  weights: [300, 400, 500, 700],
  subsets: ["latin-ext"],
  display: "swap",
});

export function createCustomTheme(font) {
  return createTheme({
    typography: {
      fontFamily: font.style.fontFamily,
      lineHeight: 1.8,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: font.style.fontFamily,
          },
        },
      },
    },
  });
}
