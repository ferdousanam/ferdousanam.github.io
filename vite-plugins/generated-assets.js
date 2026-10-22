import { resolve } from 'node:path';

import { generateAssets } from '../scripts/generate-assets.mjs';

export function generatedAssets() {
    let root = process.cwd();
    let watched = [];

    return {
        name: 'generated-assets',
        configResolved(config) {
            root = config.root;
            watched = ['index.html', 'src/js/main.js'].map((file) => resolve(root, file));
        },
        async buildStart() {
            await generateAssets({ root });
        },
        configureServer(server) {
            server.watcher.add(watched);

            server.watcher.on('change', async (file) => {
                if (!watched.includes(resolve(file))) {
                    return;
                }

                await generateAssets({ root });
                server.ws.send({ type: 'full-reload' });
            });
        },
    };
}
