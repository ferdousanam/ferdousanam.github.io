import '@fontsource-variable/manrope';
import '@fontsource-variable/space-grotesk';
import '../scss/main.scss';

import Collapse from 'bootstrap/js/dist/collapse';

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const getStoredTheme = () => {
    try {
        return localStorage.getItem('fa-theme');
    } catch (error) {
        return null;
    }
};

const setTheme = (theme, persist = true) => {
    root.dataset.bsTheme = theme;

    if (persist) {
        try {
            localStorage.setItem('fa-theme', theme);
        } catch {}
    }

    if (themeToggle) {
        const isDark = theme === 'dark';
        themeToggle.innerHTML = `<i class="bi bi-${isDark ? 'sun' : 'moon-stars'}" aria-hidden="true"></i>`;
        themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
        themeToggle.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    }

    if (themeMeta) {
        themeMeta.setAttribute('content', theme === 'dark' ? '#070b16' : '#f4f7fb');
    }
};

setTheme(root.dataset.bsTheme === 'light' ? 'light' : 'dark', false);

themeToggle?.addEventListener('click', () => {
    setTheme(root.dataset.bsTheme === 'dark' ? 'light' : 'dark');
});

systemTheme.addEventListener('change', (event) => {
    if (!getStoredTheme()) {
        setTheme(event.matches ? 'dark' : 'light', false);
    }
});

const nav = document.getElementById('mainNav');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');
const year = document.getElementById('year');
const navLinks = [...document.querySelectorAll('#mainNav .nav-link')];
const sections = navLinks
    .map((link) => {
        const target = document.querySelector(link.getAttribute('href'));
        return target ? { id: target.id, section: target } : null;
    })
    .filter(Boolean);

let navThreshold = 220;
let documentHeight = 0;
let sectionOffsets = [];

const measureLayout = () => {
    const scrollY = window.scrollY;

    navThreshold = (nav?.offsetHeight ?? 80) + 140;
    documentHeight = document.documentElement.scrollHeight;
    sectionOffsets = sections.map(({ id, section }) => ({
        id,
        top: section.getBoundingClientRect().top + scrollY,
    }));
};

const updateActiveNav = () => {
    if (!sectionOffsets.length) {
        return;
    }

    const limit = window.scrollY + navThreshold;
    let activeId = sectionOffsets[0].id;

    sectionOffsets.forEach(({ id, top }) => {
        if (top <= limit) {
            activeId = id;
        }
    });

    if (window.innerHeight + window.scrollY >= documentHeight - 4) {
        activeId = sectionOffsets[sectionOffsets.length - 1].id;
    }

    navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${activeId}`;
        link.classList.toggle('active', isActive);

        if (isActive) {
            link.setAttribute('aria-current', 'location');
        } else {
            link.removeAttribute('aria-current');
        }
    });
};

const onScroll = () => {
    nav?.classList.toggle('is-scrolled', window.scrollY > 24);
    backToTop?.classList.toggle('is-visible', window.scrollY > 600);
    updateActiveNav();
};

let scrollTicking = false;
const requestScrollUpdate = () => {
    if (scrollTicking) {
        return;
    }

    scrollTicking = true;
    window.requestAnimationFrame(() => {
        onScroll();
        scrollTicking = false;
    });
};

measureLayout();
onScroll();
window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', () => {
    measureLayout();
    requestScrollUpdate();
});
window.addEventListener('load', measureLayout);
document.fonts?.ready.then(() => {
    measureLayout();
    onScroll();
});

navMenu?.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) {
            Collapse.getOrCreateInstance(navMenu).hide();
        }
    });
});

backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

if (year) {
    year.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
    });

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
}

let lightbox = null;
let lightboxLoading = null;

const loadLightbox = () => {
    if (!lightboxLoading) {
        lightboxLoading = Promise.all([
            import('glightbox'),
            import('glightbox/dist/css/glightbox.min.css'),
        ]).then(([{ default: GLightbox }]) => {
            lightbox = GLightbox({
                selector: '.glightbox',
                loop: true,
                touchNavigation: true,
                draggable: true,
                zoomable: false,
                openEffect: 'zoom',
                closeEffect: 'fade',
            });

            return lightbox;
        });
    }

    return lightboxLoading;
};

document.addEventListener('click', async (event) => {
    const link = event.target.closest('a.glightbox');

    if (!link || lightbox) {
        return;
    }

    event.preventDefault();
    const instance = await loadLightbox();
    instance.open(link);
});
