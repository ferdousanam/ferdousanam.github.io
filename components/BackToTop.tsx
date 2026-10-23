'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const update = () => {
            setVisible(window.scrollY > 600);
            ticking = false;
        };

        const onScroll = () => {
            if (ticking) {
                return;
            }

            ticking = true;
            window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    };

    return (
        <button
            className={`back-to-top${visible ? ' is-visible' : ''}`}
            id="backToTop"
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
        >
            <i className="bi bi-arrow-up" aria-hidden="true" />
        </button>
    );
}
