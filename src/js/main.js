import '@fontsource-variable/manrope';
import '@fontsource-variable/space-grotesk';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'glightbox/dist/css/glightbox.min.css';
import '../scss/main.scss';

import * as bootstrap from 'bootstrap';
import GLightbox from 'glightbox';

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

const updateActiveNav = () => {
    if (!sections.length) {
        return;
    }

    const threshold = (nav?.offsetHeight ?? 80) + 140;
    let activeId = sections[0].id;

    sections.forEach(({ id, section }) => {
        if (section.getBoundingClientRect().top <= threshold) {
            activeId = id;
        }
    });

    const documentHeight = document.documentElement.scrollHeight;
    if (window.innerHeight + window.scrollY >= documentHeight - 4) {
        activeId = sections[sections.length - 1].id;
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

onScroll();
window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate);

navMenu?.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
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

if (document.querySelector('.glightbox')) {
    GLightbox({
        selector: '.glightbox',
        loop: true,
        touchNavigation: true,
        draggable: true,
        zoomable: false,
        openEffect: 'zoom',
        closeEffect: 'fade',
    });
}
