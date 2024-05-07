import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import localFont from "next/font/local";

import RootLayout from "@/components/layout";
import "@/styles/index.css";

const jura = localFont({
  src: "../fonts/Jura.ttf",
  weights: [300, 400, 500, 700],
  subsets: ["latin-ext"],
  display: "swap",
});

const juraFontTheme = createTheme({
  typography: {
    fontFamily: jura.style.fontFamily,
  },
});

export default function App({ Component, pageProps, props }) {
  return (
    <ThemeProvider theme={juraFontTheme}>
      <AppCacheProvider {...props}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </AppCacheProvider>
    </ThemeProvider>
  );
}
