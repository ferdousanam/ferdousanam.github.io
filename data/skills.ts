export type SkillIcon =
    | { type: 'image'; src: string }
    | { type: 'icon'; className: string };

export type Skill = {
    name: string;
    level: number;
    icon: SkillIcon;
};

export type SkillGroup = {
    title: string;
    subtitle: string;
    icon: string;
    skills: Skill[];
    note?: string;
    delay?: string;
};

export type Stack = {
    index: string;
    icons: SkillIcon[];
    title: string;
    description: string;
    badge?: string;
    primary?: boolean;
};

const image = (src: string): SkillIcon => ({ type: 'image', src });
const icon = (className: string): SkillIcon => ({ type: 'icon', className });

export const stacks: Stack[] = [
    {
        index: '01',
        icons: [image('/icons/laravel.svg'), image('/icons/react.svg')],
        title: 'Laravel + Inertia + React',
        description:
            'My primary stack for building rich, interactive products with a clean Laravel backend and a React frontend.',
        badge: 'Primary stack',
        primary: true,
    },
    {
        index: '02',
        icons: [image('/icons/laravel.svg'), image('/icons/vuejs.svg')],
        title: 'Laravel + Inertia + Vue',
        description:
            'A productive alternative when a Vue-based frontend fits the product, team and existing codebase better.',
    },
    {
        index: '03',
        icons: [image('/icons/laravel.svg'), icon('bi bi-lightning-charge')],
        title: 'Laravel + Livewire + Alpine',
        description:
            'Fast, server-driven interfaces for dashboards and admin panels with minimal JavaScript overhead.',
    },
];

export const skillGroups: SkillGroup[] = [
    {
        title: 'Backend',
        subtitle: 'Applications, APIs and data',
        icon: 'bi bi-server',
        skills: [
            { name: 'PHP', level: 50, icon: image('/icons/php.svg') },
            { name: 'Laravel', level: 80, icon: image('/icons/laravel.svg') },
            { name: 'CodeIgniter', level: 60, icon: image('/icons/codeigniter.svg') },
            { name: 'MySQL', level: 60, icon: image('/icons/mysql.svg') },
        ],
    },
    {
        title: 'Frontend',
        subtitle: 'Interfaces and experiences',
        icon: 'bi bi-window-stack',
        delay: '.08s',
        skills: [
            { name: 'React', level: 80, icon: image('/icons/react.svg') },
            { name: 'Vue.js', level: 65, icon: image('/icons/vuejs.svg') },
            { name: 'JavaScript', level: 70, icon: image('/icons/javascript.svg') },
            { name: 'jQuery', level: 40, icon: image('/icons/jquery.svg') },
            { name: 'HTML5', level: 80, icon: image('/icons/html5.svg') },
            { name: 'CSS3', level: 85, icon: image('/icons/css3.svg') },
            { name: 'Bootstrap', level: 80, icon: image('/icons/bootstrap.svg') },
        ],
    },
    {
        title: 'Tools',
        subtitle: 'Workflow and environment',
        icon: 'bi bi-tools',
        delay: '.16s',
        note: 'AI-assisted development tooling, automated testing and modern deployment workflows.',
        skills: [
            { name: 'Git', level: 50, icon: image('/icons/git.svg') },
            { name: 'Trello', level: 80, icon: image('/icons/trello.svg') },
            { name: 'Ubuntu', level: 70, icon: image('/icons/ubuntu.svg') },
            { name: 'AlmaLinux', level: 70, icon: image('/icons/almalinux.svg') },
            { name: 'Webuzo', level: 65, icon: icon('bi bi-hdd-network') },
        ],
    },
];
