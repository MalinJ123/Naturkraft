import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

import RootLayout from "@/components/layout";
import "@/styles/index.css";
import { createTheme, ThemeProvider } from "@emotion/react";

const themeJura = createTheme ({
  typography: {
    fontFamily:"Jura, sans-serif",
  },
})

export default function App({ Component, pageProps, props }) {
  return (
    <ThemeProvider theme={themeJura}>
    <AppCacheProvider {...props}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </AppCacheProvider>
      </ThemeProvider>
  );
}
