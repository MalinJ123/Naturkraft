import RootLayout from "@/components/layout";
import "@/styles/index.css";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
