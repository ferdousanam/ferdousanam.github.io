export type TimelineEntry = {
    period: string;
    title: string;
    role: string;
    description: string;
    tags: string[];
    icon: string;
    delay?: string;
};

export const experience: TimelineEntry[] = [
    {
        period: 'Present',
        title: 'Chief Technology Officer',
        role: 'OSHNI SOFTWARE',
        description:
            'Leading engineering, architecture and product delivery for enterprise ERP, healthcare and warranty management platforms.',
        tags: ['ERP', 'EDCR', 'Warranty Activator'],
        icon: 'bi bi-briefcase-fill',
    },
    {
        period: 'Aug 2020 – Jul 2023',
        title: 'Senior Software Engineer',
        role: 'DoCommerce Limited',
        description:
            'Contributed to a SaaS e-commerce platform that helped merchants launch online stores with a drag-and-drop builder, multi-store management, social shop integrations and cloud POS.',
        tags: ['E-commerce', 'SaaS', 'Cloud POS'],
        icon: 'bi bi-code-slash',
        delay: '.08s',
    },
];

export const education: TimelineEntry[] = [
    {
        period: '2014 — 2019',
        title: 'United International University',
        role: 'B.Sc. in Computer Science & Engineering',
        description:
            'Completed in January 2019 with a strong foundation in software engineering, algorithms and database systems.',
        tags: ['Graduated'],
        icon: 'bi bi-mortarboard-fill',
    },
    {
        period: '2011 — 2013',
        title: 'Dinajpur Govt. College',
        role: 'Higher Secondary Certificate',
        description:
            'Science department. Completed in 2013 before moving on to study computer science and engineering.',
        tags: ['Science'],
        icon: 'bi bi-book-half',
        delay: '.1s',
    },
];
