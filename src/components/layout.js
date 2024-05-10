import Footer from "@/components/footer";
import Header from "@/components/header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const headerHeight = "80px";
export const footerHeight = "145px";
export const contentHeight = `calc(100% - ${headerHeight} - ${footerHeight})`;

export default function RootLayout({ children }) {
  return (
    <AppRouterCacheProvider>
      <Header />
      {children}
      <Footer />
    </AppRouterCacheProvider>
  );
}
