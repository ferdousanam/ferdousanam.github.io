import type { Metadata, Viewport } from 'next';

import '@fontsource-variable/manrope';
import '@fontsource-variable/space-grotesk';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import '@/src/scss/main.scss';

import BackToTop from '@/components/BackToTop';
import Lightbox from '@/components/Lightbox';
import RevealEffects from '@/components/RevealEffects';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import { site } from '@/data/site';
import { themeInitScript } from '@/lib/theme';

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: site.title,
    description: site.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.socials.github }],
    creator: site.name,
    publisher: site.name,
    keywords: [
        'Ferdous Anam',
        'CTO',
        'OSHNI SOFTWARE',
        'Laravel developer',
        'Inertia.js',
        'React',
        'Vue.js',
        'Livewire',
        'PHP',
        'portfolio',
    ],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        siteName: site.name,
        title: site.title,
        description: site.shortDescription,
        images: [
            {
                url: '/images/og.png',
                width: 1200,
                height: 630,
                alt: site.title,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: site.title,
        description: site.shortDescription,
        images: ['/images/og.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    icons: {
        icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    colorScheme: 'light dark',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: `${site.url}/`,
    jobTitle: site.jobTitle,
    email: `mailto:${site.email}`,
    worksFor: {
        '@type': 'Organization',
        name: site.company,
    },
    knowsAbout: site.knowsAbout,
    sameAs: [
        site.socials.github,
        site.socials.gitlab,
        site.socials.linkedin,
        site.socials.facebook,
    ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-bs-theme="dark" suppressHydrationWarning>
            <head>
                <meta name="theme-color" content="#070b16" />
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <a className="skip-link" href="#main">
                    Skip to content
                </a>

                <SiteNav />

                {children}

                <SiteFooter />
                <BackToTop />
                <RevealEffects />
                <Lightbox />
            </body>
        </html>
    );
}
