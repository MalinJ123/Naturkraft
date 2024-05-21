import { Box } from "@mui/material";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const headerHeight = "80px";
export const footerHeight = "145px";

export default function RootLayout({ children }) {
  return (
    <AppRouterCacheProvider>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        maxWidth
        sx={{ placeContent: "center" }}
      >
        {children}
      </Box>
      <Footer />
    </AppRouterCacheProvider>
  );
}
