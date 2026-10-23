/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        unoptimized: true,
    },
    sassOptions: {
        quietDeps: true,
        silenceDeprecations: [
            'import',
            'global-builtin',
            'color-functions',
            'legacy-js-api',
        ],
    },
};

export default nextConfig;
