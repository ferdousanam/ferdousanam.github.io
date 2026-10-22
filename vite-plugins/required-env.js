import { loadEnv } from 'vite';

export function requiredEnv(keys) {
    return {
        name: 'required-env',
        config(config, { mode }) {
            const env = loadEnv(mode, config.root ?? process.cwd(), 'VITE_');
            const missing = keys.filter((key) => !env[key]);

            if (missing.length) {
                throw new Error(
                    `Missing required environment variables:\n${missing.map((key) => `- ${key}`).join('\n')}\n` +
                    'Copy .env.example to .env for local development, or set them in your CI environment.',
                );
            }
        },
    };
}
