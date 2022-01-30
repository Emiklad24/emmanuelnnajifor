/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
            rel="stylesheet"
          />
          <script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></script>
          <meta name="application-name" content="Emmanuel Nnajiofor" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Emmanuel Nnajiofor"
          />

          <meta name="format-detection" content="+234(0)-816-378-5517" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="apple-touch-icon" href="/avatar.ico" />
          <link rel="apple-touch-icon" sizes="152x152" href="/avatar.jpg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/avatar.jpg" />
          <link rel="apple-touch-icon" sizes="167x167" href="/avatar.jpg" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/jpg" sizes="32x32" href="/avatar.jpg" />
          <link rel="icon" type="image/jpg" sizes="16x16" href="/avatar.jpg" />

          <link rel="mask-icon" href="/avatar.jpg" color="#5bbad5" />
          <link rel="shortcut icon" href="/avatar.ico" />

          <meta name="twitter:url" content="https://emmanuelnnajiofor.com" />
          <meta name="twitter:title" content="Emmanuel Nnajiofor" />

          <meta
            name="twitter:image"
            content="https://emmanuelnnajiofor.com/avatar.ico"
          />
          <meta name="twitter:creator" content="@NnajioforEmma10" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Emmanuel Nnajiofor" />

          <meta property="og:site_name" content="emmanuelnnajiofor.com" />
          <meta property="og:url" content="https://emmanuelnnajiofor.com" />
          <meta
            property="og:image"
            content="https://emmanuelnnajiofor.com/avatar.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
