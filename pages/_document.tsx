import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="og:url" content="https://themanufactory.xyz/" />
        <meta name="og:title" content="Legend" />
        <meta name="og:description" content="" />
        <meta name="og:image" content="https://themanufactory.xyz/card.png/" />
        <meta name="twitter:card" content="summary" />
        <meta name="og:url" content="https://themanufactory.xyz/" />
        <meta name="og:image" content="https://themanufactory.xyz/card.png/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@digitalax_" />
        <meta name="twitter:creator" content="@digitalax_" />
        <meta
          name="twitter:image"
          content="https://themanufactory.xyz/card.png/"
        />
        <meta name="twitter:url" content="https://themanufactory.xyz/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://themanufactory.xyz/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/gennaro.ttf"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/ClashDisplayM.otf"
          as="font"
          crossOrigin="anonymous"
          type="font/otf"
        />
        <link
          rel="preload"
          href="/fonts/breakRegular.ttf"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/ClashDisplayB.otf"
          as="font"
          crossOrigin="anonymous"
          type="font/otf"
        />
        <link
          rel="preload"
          href="/fonts/HermanoAltoStamp.otf"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: "Gennaro";
                font-weight: 400;
                src: url("./fonts/gennaro.ttf");
              }

              @font-face {
                font-family: "Break Regular";
                font-weight: 400;
                src: url("./fonts/breakRegular.ttf");
              }

              @font-face {
                font-family: "Clash Display M";
                font-weight: 400;
                src: url("./fonts/ClashDisplayM.ttf");
              }

              @font-face {
                font-family: "Clash Display B";
                font-weight: 400;
                src: url("./fonts/ClashDisplayB.ttf");
              }

              @font-face {
                font-family: "Hermano";
                font-weight: 400;
                src: url("./fonts/HermanoAltoStamp.ttf");
              }
            `,
          }}
        ></style>
      </Head>
      <body>
        <script>0</script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
