const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.9 },
    { url: "/about", changefreq: "daily", priority: 0.9 },
    { url: "/contact", changefreq: "daily", priority: 0.9 },
    { url: "/experience", changefreq: "daily", priority: 0.9 },
    { url: "/projects", changefreq: "daily", priority: 0.9 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
