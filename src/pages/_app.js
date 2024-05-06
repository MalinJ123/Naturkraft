import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

import RootLayout from "@/components/layout";
import "@/styles/index.css";

export default function App({ Component, pageProps, props }) {
  return (
    <AppCacheProvider {...props}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </AppCacheProvider>
  );
}
