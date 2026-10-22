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

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), 'VITE_');
    const missing = requiredEnv.filter((key) => !env[key]);

    if (missing.length) {
        throw new Error(
            `Missing required environment variables:\n${missing.map((key) => `- ${key}`).join('\n')}\n` +
            'Copy .env.example to .env for local development, or configure them in GitLab CI/CD variables.',
        );
    }

    return {
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
