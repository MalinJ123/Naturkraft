import Footer from "@/components/footer";
import Header from "@/components/header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function RootLayout({ children }) {
  return (
    <AppRouterCacheProvider>
      <Header />
      {children}
      <Footer />
    </AppRouterCacheProvider>
  );
}
