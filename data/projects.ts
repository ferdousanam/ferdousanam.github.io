export type FeaturedProject = {
    company: string;
    cover: 'erp' | 'edcr' | 'warranty';
    category: string;
    stack: string;
    title: string;
    description: string;
    tech: string[];
    status: string;
    icon: string;
    delay?: string;
};

export type Project = {
    category: string;
    stack: string;
    title: string;
    description: string;
    tech: string[];
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    lightbox: {
        title: string;
        description: string;
    };
    href?: string;
    status?: string;
    delay?: string;
};

export const featuredProjects: FeaturedProject[] = [
    {
        company: 'OSHNI SOFTWARE',
        cover: 'erp',
        category: 'Enterprise',
        stack: 'Laravel · Inertia · React',
        title: 'ERP Platform',
        description:
            'An enterprise resource planning platform for streamlining business operations, reporting and role-based workflows.',
        tech: ['Laravel', 'Inertia.js', 'React', 'MySQL'],
        status: 'Internal platform',
        icon: 'bi bi-diagram-3',
    },
    {
        company: 'ARISTOPHARMA LTD',
        cover: 'edcr',
        category: 'Healthcare',
        stack: 'Laravel · Livewire · Alpine',
        title: 'EDCR Platform',
        description:
            'Electronic Doctor Call Record for Aristopharma Ltd, digitizing field visits, reporting and manager workflows.',
        tech: ['Laravel', 'Livewire', 'Alpine.js', 'MySQL'],
        status: 'Enterprise platform',
        icon: 'bi bi-heart-pulse',
        delay: '.08s',
    },
    {
        company: 'VISION TV (RFL)',
        cover: 'warranty',
        category: 'Warranty',
        stack: 'Laravel · Livewire · Alpine',
        title: 'Warranty Activator',
        description:
            'A warranty activation platform for Vision TV (RFL), handling product registration, verification and reporting.',
        tech: ['Laravel', 'Livewire', 'Alpine.js', 'MySQL'],
        status: 'Enterprise platform',
        icon: 'bi bi-shield-check',
        delay: '.16s',
    },
];

export const earlierProjects: Project[] = [
    {
        category: 'Property SaaS',
        stack: 'Laravel · Vue.js',
        title: 'Short Term Rental',
        description:
            'A property management platform built to match guests with the right short-term rentals, with clear workflows for property managers.',
        tech: ['PHP', 'Laravel', 'Vue.js', 'Vapor', 'AWS S3'],
        image: {
            src: '/images/str.png',
            alt: 'Short Term Rental property management system',
            width: 1919,
            height: 936,
        },
        lightbox: {
            title: 'Short Term Rental',
            description: 'Property management system for short-term rentals.',
        },
        href: 'https://str-stage.prochamps.com',
    },
    {
        category: 'Marketplace',
        stack: 'Laravel · Vue.js',
        title: 'Garivara Car Rental',
        description:
            'A car rental portal connecting users, drivers, merchants and administrators, with bookings, fleet management and reporting.',
        tech: ['PHP', 'Laravel', 'Vue.js', 'DigitalOcean'],
        image: {
            src: '/images/garivara.png',
            alt: 'Garivara car rental platform',
            width: 1281,
            height: 833,
        },
        lightbox: {
            title: 'Garivara Car Rental',
            description: 'Car rental portal for users, drivers, merchants and admins.',
        },
        href: 'https://dev.garivara.com.bd/',
        delay: '.08s',
    },
    {
        category: 'Travel',
        stack: 'Laravel · Vue.js',
        title: 'Tours & Travels',
        description:
            'A travel management application for Hajj and Umrah operations, currently used by S.N. Tours & Travels in Bangladesh.',
        tech: ['PHP', 'Laravel', 'Vue.js', 'Bootstrap'],
        image: {
            src: '/images/travelsoft.png',
            alt: 'Tours and Travels management system',
            width: 1919,
            height: 936,
        },
        lightbox: {
            title: 'Tours & Travels',
            description: 'Tours and travel management system for Hajj and Umrah operations.',
        },
        href: 'https://acquaintbd.com/travelsoft/',
    },
    {
        category: 'E-commerce',
        stack: 'CodeIgniter',
        title: 'Electronics Shop',
        description:
            'An online store for electronics with advanced filtering and separate user and admin panels, built with the CodeIgniter framework.',
        tech: ['PHP', 'CodeIgniter', 'JavaScript', 'Bootstrap'],
        image: {
            src: '/images/eshop.jpg',
            alt: 'Electronics e-commerce shop',
            width: 802,
            height: 628,
        },
        lightbox: {
            title: 'Electronics Shop',
            description: 'E-commerce store for electronics with user and admin panels.',
        },
        status: 'Internal project',
        delay: '.08s',
    },
];
