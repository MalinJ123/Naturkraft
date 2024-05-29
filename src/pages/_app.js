import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";

import RootLayout from "@/components/layout";
import { mainTheme } from "@/styles/mainTheme";

import "@/styles/globals.css";

export default function App({ Component, pageProps, props }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={mainTheme}>
        <AppCacheProvider {...props}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </AppCacheProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
