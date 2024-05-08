import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";

import RootLayout from "@/components/layout";
import "@/styles/index.css";
import { mainTheme } from "@/styles/mainTheme";

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
