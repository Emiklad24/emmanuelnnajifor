import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Emmanuel Nnajiofor - Developer, Blogger, Tutor and Gamer",
    description: `I'm a software developer that loves building products and web applications that impact real people`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <link rel="icon" href="/avatar.jpg" />
        <link rel="apple-touch-icon" href="/avatar.jpg" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://emmanuelnnajiofor.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://emmanuelnnajiofor.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Emmanuel Nnajiofor" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NnajioforEmma10" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
