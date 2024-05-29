import { Html, Head, Main, NextScript } from "next/document";
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v13-pagesRouter";

export default function Document(props) {
  return (
    <Html lang="sv">
      <Head>
        <DocumentHeadTags {...props} />
        <link rel="icon" href="/src/images/main/logotype.png" />
        <meta
          name="description"
          content="Naturkraft är ett innovationsprojekt för att skapa en smart soldriven belysning."
        />
        <meta
          name="keywords"
          content="Naturkraft, solenergi, energi, Glava, Glava Energy Center, Värmland, elljusspår"
        />
        <meta
          property="og:title"
          content="Naturkraft | Projektsida skapad av Techseed"
        />
        <meta
          property="og:description"
          content="Naturkraft är ett innovationsprojekt."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
