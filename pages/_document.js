import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/assets/css/sweetalert2.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        <link
          id="primaryColor"
          rel="stylesheet"
          href="/assets/css/blue-color.css" // Set the default stylesheet path
        />
        <link rel="stylesheet" href="/assets/css/openai.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
