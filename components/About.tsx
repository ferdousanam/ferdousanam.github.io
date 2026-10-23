import { delayStyle } from '@/lib/style';
import { site } from '@/data/site';

const features = [
    {
        icon: 'bi bi-server',
        title: 'Backend engineering',
        description:
            'Robust Laravel applications with clean architecture, well-designed databases and dependable business logic.',
        delay: '.08s',
    },
    {
        icon: 'bi bi-window-stack',
        title: 'Modern frontends',
        description:
            'Interactive interfaces with Laravel + Inertia + React, plus Vue and Livewire where they fit the product best.',
        delay: '.14s',
    },
    {
        icon: 'bi bi-diagram-3',
        title: 'Problem-solving',
        description:
            'I break complex requirements into clear, practical steps and stay focused on the outcome rather than the noise.',
        delay: '.2s',
    },
    {
        icon: 'bi bi-people',
        title: 'Team delivery',
        description:
            'Comfortable working with teams, communicating progress and shipping features that people actually use.',
        delay: '.26s',
    },
];

const meta = [
    {
        icon: 'bi bi-mortarboard',
        title: 'B.Sc. in Computer Science & Engineering',
        detail: 'United International University',
    },
    {
        icon: 'bi bi-code-square',
        title: 'CTO @ OSHNI SOFTWARE',
        detail: 'Laravel · Inertia · React',
    },
    {
        icon: 'bi bi-envelope',
        title: site.email,
        detail: 'Leading engineering at OSHNI',
    },
];

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-heading text-center" data-reveal>
                    <span className="eyebrow">About me</span>
                    <h2>More than code — I care about the product</h2>
                    <p className="section-lead mx-auto">
                        I like building software that is easy to use, easy to maintain and genuinely useful
                        for the people who depend on it.
                    </p>
                </div>

                <div className="row g-4 align-items-stretch">
                    <div className="col-lg-5" data-reveal>
                        <div className="glass-card about-card h-100">
                            <span className="quote-mark" aria-hidden="true">
                                &ldquo;
                            </span>
                            <p className="about-quote">
                                A good application is not just about working features. It is about clear
                                structure, thoughtful details and a smooth experience from end to end.
                            </p>

                            <div className="about-meta">
                                {meta.map((item) => (
                                    <div className="about-meta-item" key={item.title}>
                                        <i className={item.icon} aria-hidden="true" />
                                        <span>
                                            <strong>{item.title}</strong>
                                            <small>{item.detail}</small>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="row g-4 h-100">
                            {features.map((feature) => (
                                <div
                                    className="col-sm-6"
                                    data-reveal
                                    key={feature.title}
                                    style={delayStyle(feature.delay)}
                                >
                                    <div className="feature-card h-100">
                                        <span className="feature-icon">
                                            <i className={feature.icon} aria-hidden="true" />
                                        </span>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
