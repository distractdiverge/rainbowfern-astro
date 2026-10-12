// Astro endpoint for robots.txt
export const prerender = true;

export function GET(_context: { url: URL }) {
  return new Response(
    `User-agent: *
Allow: /
Allow: /llms.txt
Disallow: /contact-form

Sitemap: https://rainbowfern.com/sitemap.xml`,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    },
  );
}
