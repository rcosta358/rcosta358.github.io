const site = "https://rcosta358.github.io";
const pages = import.meta.glob("./**/*.astro");

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const routeFromPagePath = (pagePath: string) => {
  const route = pagePath
    .replace(/^\.\//, "/")
    .replace(/\/index\.astro$/, "/")
    .replace(/\.astro$/, "/");

  return route;
};

export const GET = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = Object.keys(pages)
    .filter((pagePath) => !pagePath.includes("[") && !pagePath.includes("_"))
    .map(routeFromPagePath)
    .sort((a, b) => a.localeCompare(b))
    .map(
      (route) => `  <url>
    <loc>${escapeXml(new URL(route, site).toString())}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    )
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
