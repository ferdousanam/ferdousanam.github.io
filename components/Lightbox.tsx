'use client';

import { useEffect } from 'react';

type LightboxInstance = {
    open: (element: Element) => void;
    destroy: () => void;
};

export default function Lightbox() {
    useEffect(() => {
        let instance: LightboxInstance | null = null;
        let loading: Promise<LightboxInstance> | null = null;

        const load = () => {
            if (!loading) {
                loading = import('glightbox').then(({ default: GLightbox }) => {
                    instance = GLightbox({
                        selector: '.glightbox',
                        loop: true,
                        touchNavigation: true,
                        draggable: true,
                        zoomable: false,
                        openEffect: 'zoom',
                        closeEffect: 'fade',
                    }) as LightboxInstance;

                    return instance;
                });
            }

            return loading;
        };

        const onClick = async (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            const link = target?.closest<HTMLAnchorElement>('a.glightbox');

            if (!link || instance) {
                return;
            }

            event.preventDefault();
            const lightbox = await load();
            lightbox.open(link);
        };

        document.addEventListener('click', onClick);

        return () => {
            document.removeEventListener('click', onClick);
            instance?.destroy();
        };
    }, []);

    return null;
}
