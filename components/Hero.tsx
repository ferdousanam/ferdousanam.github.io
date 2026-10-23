import { site, socialLinks } from '@/data/site';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bg" aria-hidden="true">
                <span className="orb orb-one" />
                <span className="orb orb-two" />
                <span className="orb orb-three" />
                <span className="grid-overlay" />
            </div>

            <div className="container position-relative">
                <div className="row align-items-center g-5">
                    <div className="col-lg-7">
                        <span className="eyebrow">
                            <span className="status-dot" aria-hidden="true" />
                            CTO @ OSHNI SOFTWARE
                        </span>

                        <h1 className="hero-title">
                            I build reliable <span className="gradient-text">web applications</span>{' '}
                            that solve real problems.
                        </h1>

                        <p className="hero-lead">
                            Hi, I&apos;m <strong>{site.name}</strong> — the CTO at{' '}
                            <strong>{site.company}</strong>, building Laravel applications with Inertia,
                            React, Vue and Livewire. I enjoy turning complex requirements into clean,
                            maintainable and user-friendly products.
                        </p>

                        <div className="d-flex flex-wrap gap-3">
                            <a className="btn btn-gradient btn-lg" href="#projects">
                                Explore projects
                                <i className="bi bi-arrow-down-right" aria-hidden="true" />
                            </a>
                            <a
                                className="btn btn-outline-soft btn-lg"
                                href={`mailto:${site.email}`}
                            >
                                <i className="bi bi-send" aria-hidden="true" />
                                Let&apos;s talk
                            </a>
                        </div>

                        <div className="hero-socials">
                            <span>Find me on</span>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                >
                                    <i className={link.icon} aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="hero-visual">
                            <div className="portrait-ring">
                                <div className="portrait-card">
                                    <img
                                        src="/images/profile.webp"
                                        alt={`Portrait of ${site.name}`}
                                        width="300"
                                        height="250"
                                        fetchPriority="high"
                                    />
                                </div>
                            </div>

                            <div className="floating-card floating-stack">
                                <span className="floating-icon floating-icon-pair">
                                    <img
                                        className="tech-icon"
                                        src="/icons/laravel.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                    <img
                                        className="tech-icon"
                                        src="/icons/react.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                </span>
                                <span>
                                    <strong>Laravel + React</strong>
                                    <small>Primary stack</small>
                                </span>
                            </div>

                            <div className="floating-card floating-code">
                                <span className="floating-icon">
                                    <i className="bi bi-code-slash" aria-hidden="true" />
                                </span>
                                <span>
                                    <strong>Clean &amp; scalable</strong>
                                    <small>Backend first</small>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
                    <span aria-hidden="true" />
                    Scroll to explore
                </a>
            </div>
        </section>
    );
}
