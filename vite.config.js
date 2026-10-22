import { defineConfig } from 'vite';

import { generatedAssets } from './vite-plugins/generated-assets.js';
import { requiredEnv } from './vite-plugins/required-env.js';
import { siteFiles } from './vite-plugins/site-files.js';

export default defineConfig({
    plugins: [
        requiredEnv([
            'VITE_SITE_URL',
            'VITE_CONTACT_EMAIL',
            'VITE_GITHUB_URL',
            'VITE_GITLAB_URL',
            'VITE_LINKEDIN_URL',
            'VITE_FACEBOOK_URL',
            'VITE_GITHUB_AVATAR_URL',
        ]),
        generatedAssets(),
        siteFiles(),
    ],
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
});
