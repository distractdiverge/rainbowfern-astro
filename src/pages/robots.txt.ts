// Astro endpoint for robots.txt
export const prerender = true;

export function GET(_context: { url: URL }) {
  return new Response(
    `User-agent: *
Allow: /
Allow: /llms.txt

Sitemap: https://rainbowfern.com/sitemap-index.xml`,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    },
  );
}
