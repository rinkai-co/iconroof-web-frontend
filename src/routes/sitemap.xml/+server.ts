import { getAllMockProducts } from '$lib/mock-data';
import type { RequestEvent } from './$types';

export async function GET({ url }: RequestEvent) {
    const products = getAllMockProducts();
    const site = url.origin;

    const pages = [
        '',
        '/products',
        '/preview',
        '/blogs',
        '/services'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
${pages
    .map(
        (page) => `  <url>
    <loc>${site}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? 1.0 : 0.8}</priority>
  </url>`
    )
    .join('\n')}
${products
    .map(
        (product) => `  <url>
    <loc>${site}/products/${product.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
}
