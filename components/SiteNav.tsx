'use client';

import { useCallback, useEffect, useState } from 'react';

import { navItems, site } from '@/data/site';

type Theme = 'light' | 'dark';

const getStoredTheme = () => {
    try {
        return localStorage.getItem('fa-theme');
    } catch {
        return null;
    }
};

const setThemeColor = (theme: Theme) => {
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
        meta.setAttribute('content', theme === 'dark' ? '#070b16' : '#f4f7fb');
    });
};

export default function SiteNav() {
    const [theme, setTheme] = useState<Theme>('dark');
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('home');

    const applyTheme = useCallback((nextTheme: Theme, persist = true) => {
        document.documentElement.dataset.bsTheme = nextTheme;

        if (persist) {
            try {
                localStorage.setItem('fa-theme', nextTheme);
            } catch {
                // Storage can be unavailable in private browsing modes.
            }
        }

        setThemeColor(nextTheme);
        setTheme(nextTheme);
    }, []);

    useEffect(() => {
        const initial = document.documentElement.dataset.bsTheme === 'light' ? 'light' : 'dark';
        setTheme(initial);
        setThemeColor(initial);

        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = (event: MediaQueryListEvent) => {
            if (!getStoredTheme()) {
                applyTheme(event.matches ? 'dark' : 'light', false);
            }
        };

        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, [applyTheme]);

    useEffect(() => {
        let ticking = false;

        const update = () => {
            setScrolled(window.scrollY > 24);
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

    useEffect(() => {
        const sections = navItems
            .map(({ id }) => document.getElementById(id))
            .filter((section): section is HTMLElement => Boolean(section));

        if (!sections.length) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting);

                if (!visible.length) {
                    return;
                }

                const current = visible.sort(
                    (a, b) => b.intersectionRatio - a.intersectionRatio,
                )[0];

                setActive(current.target.id);
            },
            {
                rootMargin: '-42% 0px -46% 0px',
                threshold: [0, 0.2, 0.5, 1],
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!open) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [open]);

    const isDark = theme === 'dark';

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top site-nav${scrolled ? ' is-scrolled' : ''}`}
            id="mainNav"
            aria-label="Main navigation"
        >
            <div className="container">
                <a className="navbar-brand" href="#home" aria-label={`${site.name} — home`}>
                    <span className="brand-mark" aria-hidden="true">
                        <img src={site.avatarUrl} alt="" width="40" height="40" />
                    </span>
                    <span className="brand-text">
                        Ferdous <span>Anam</span>
                    </span>
                </a>

                <div className="nav-actions order-lg-3">
                    <button
                        className="theme-toggle"
                        id="themeToggle"
                        type="button"
                        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                        title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                        onClick={() => applyTheme(isDark ? 'light' : 'dark')}
                    >
                        <i className={isDark ? 'bi bi-sun' : 'bi bi-moon-stars'} aria-hidden="true" />
                    </button>
                    <button
                        className={`navbar-toggler${open ? '' : ' collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navMenu"
                        aria-controls="navMenu"
                        aria-expanded={open}
                        aria-label="Toggle navigation"
                        onClick={() => setOpen((value) => !value)}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>

                <div
                    className={`collapse navbar-collapse order-lg-2${open ? ' show' : ''}`}
                    id="navMenu"
                >
                    <ul className="navbar-nav mx-lg-auto">
                        {navItems.map(({ id, label }) => {
                            const isActive = active === id;

                            return (
                                <li className="nav-item" key={id}>
                                    <a
                                        className={`nav-link${isActive ? ' active' : ''}`}
                                        href={`#${id}`}
                                        aria-current={isActive ? 'location' : undefined}
                                        onClick={() => setOpen(false)}
                                    >
                                        {label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <a
                        className="btn btn-gradient nav-cta d-none d-lg-inline-flex"
                        href={`mailto:${site.email}`}
                    >
                        Hire me
                        <i className="bi bi-arrow-up-right" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </nav>
    );
}
