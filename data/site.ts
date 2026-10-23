const read = (value: string | undefined, fallback: string) => value?.trim() || fallback;

const github = read(process.env.NEXT_PUBLIC_GITHUB_URL, 'https://github.com/ferdousanam');
const gitlab = read(process.env.NEXT_PUBLIC_GITLAB_URL, 'https://gitlab.com/ferdousanam');
const linkedin = read(process.env.NEXT_PUBLIC_LINKEDIN_URL, 'https://linkedin.com/in/ferdousanam');
const facebook = read(process.env.NEXT_PUBLIC_FACEBOOK_URL, 'https://fb.me/ferdous.anam');

export const site = {
    name: 'Ferdous Anam',
    title: 'Ferdous Anam — CTO at OSHNI SOFTWARE',
    jobTitle: 'Chief Technology Officer',
    company: 'OSHNI SOFTWARE',
    description:
        'Ferdous Anam is the CTO at OSHNI SOFTWARE, building Laravel applications with Inertia, React, Vue and Livewire.',
    shortDescription:
        'CTO at OSHNI SOFTWARE, building Laravel applications with Inertia, React, Vue and Livewire.',
    url: read(process.env.NEXT_PUBLIC_SITE_URL, 'https://ferdousanam.gitlab.io').replace(/\/+$/, ''),
    email: read(process.env.NEXT_PUBLIC_CONTACT_EMAIL, 'ferdous.anam@gmail.com'),
    avatarUrl: read(
        process.env.NEXT_PUBLIC_GITHUB_AVATAR_URL,
        'https://github.com/ferdousanam.png?size=120',
    ),
    socials: {
        github,
        gitlab,
        linkedin,
        facebook,
    },
    knowsAbout: [
        'Laravel',
        'Inertia.js',
        'React',
        'Vue.js',
        'Livewire',
        'Alpine.js',
        'PHP',
        'MySQL',
    ],
} as const;

export const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
] as const;

export const socialLinks = [
    { label: 'GitHub', href: github, icon: 'bi bi-github' },
    { label: 'GitLab', href: gitlab, icon: 'bi bi-gitlab' },
    { label: 'LinkedIn', href: linkedin, icon: 'bi bi-linkedin' },
    { label: 'Facebook', href: facebook, icon: 'bi bi-facebook' },
] as const;
