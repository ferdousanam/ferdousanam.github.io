import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';

const requiredEnv = [
    'VITE_SITE_URL',
    'VITE_CONTACT_EMAIL',
    'VITE_GITHUB_URL',
    'VITE_GITLAB_URL',
    'VITE_LINKEDIN_URL',
    'VITE_FACEBOOK_URL',
    'VITE_GITHUB_AVATAR_URL',
];

function siteFilesPlugin(siteUrl) {
    const baseUrl = siteUrl.replace(/\/+$/, '');

    return {
        name: 'site-files',
        apply: 'build',
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

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), 'VITE_');
    const missing = requiredEnv.filter((key) => !env[key]);

    if (missing.length) {
        throw new Error(
            `Missing required environment variables:\n${missing.map((key) => `- ${key}`).join('\n')}\n` +
            'Copy .env.example to .env for local development, or set them in your CI environment.',
        );
    }

    return {
        plugins: [siteFilesPlugin(env.VITE_SITE_URL)],
        build: {
            outDir: 'dist',
            assetsDir: 'assets',
            sourcemap: false,
            target: 'es2020',
        },
        css: {
            preprocessorOptions: {
                scss: {
                    quietDeps: true,
                    silenceDeprecations: [
                        'import',
                        'global-builtin',
                        'color-functions',
                        'legacy-js-api',
                    ],
                },
            },
        },
    };
});
