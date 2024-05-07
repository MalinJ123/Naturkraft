import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import localFont from "next/font/local";

import RootLayout from "@/components/layout";
import "@/styles/index.css";

const juraFont = localFont({
  src: "../fonts/Jura.ttf",
  weights: [300, 400, 500, 700],
  subsets: ["latin-ext"],
  display: "swap",
});

const mainTheme = createTheme({
  typography: {
    fontFamily: juraFont.style.fontFamily,
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
    opacityWhite: {
      main: "rgba(255, 255, 255, 0.90)",
    },
  },
});

export default function App({ Component, pageProps, props }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppCacheProvider {...props}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </AppCacheProvider>
    </ThemeProvider>
  );
}
