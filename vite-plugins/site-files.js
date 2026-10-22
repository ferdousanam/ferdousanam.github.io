import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { loadEnv } from 'vite';

export function siteFiles() {
    let baseUrl = '';

    return {
        name: 'site-files',
        apply: 'build',
        configResolved(config) {
            baseUrl = loadEnv(config.mode, config.root, 'VITE_').VITE_SITE_URL.replace(/\/+$/, '');
        },
        writeBundle(options) {
            const outDir = options.dir ?? resolve(process.cwd(), 'dist');

            writeFileSync(
                resolve(outDir, 'robots.txt'),
                `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`,
            );

            writeFileSync(
                resolve(outDir, 'sitemap.xml'),
                `<?xml version="1.0" encoding="UTF-8"?>\n` +
                `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
                `    <url>\n` +
                `        <loc>${baseUrl}/</loc>\n` +
                `        <changefreq>monthly</changefreq>\n` +
                `        <priority>1.0</priority>\n` +
                `    </url>\n` +
                `</urlset>\n`,
            );
        },
    };
}
