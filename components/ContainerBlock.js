import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Emmanuel Nnajiofor - Developer, Blogger, Tutor and Gamer",
    description: `I'm a software developer that loves building products and web applications that impact real people`,
    image: "/avatar.ico",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <link rel="icon" href="/avatar.ico" />
        <link rel="apple-touch-icon" href="/avatar.ico" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.emmanuelnnajiofor.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.emmanuelnnajiofor.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Emmanuel Nnajiofor" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content="/avatar.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NnajioforEmma10" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="/avatar.ico" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        <meta name="application-name" content="Emmanuel Nnajiofor" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Emmanuel Nnajiofor" />

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
        <meta
          name="twitter:title"
          content="Emmanuel Nnajiofor - I'm a software developer that loves building products and web applications that impact real people"
        />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="/avatar.ico" />
        <meta name="twitter:creator" content="@NnajioforEmma10" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Emmanuel Nnajiofor" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="emmanuelnnajiofor.com" />
        <meta property="og:url" content="https://emmanuelnnajiofor.com" />
        <meta property="og:image" content="/avatar.ico" />
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
              pageExit: {
                opacity: 0,
              },
            }}
            exit="pageExit"
          >
            <div>{children}</div>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  );
}
