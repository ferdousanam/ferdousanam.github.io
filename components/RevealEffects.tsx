'use client';

import { useEffect } from 'react';

export default function RevealEffects() {
    useEffect(() => {
        const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!('IntersectionObserver' in window) || reduceMotion) {
            items.forEach((item) => item.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add('is-visible');
                    currentObserver.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            },
        );

        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return null;
}
