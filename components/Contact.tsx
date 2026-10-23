import { site } from '@/data/site';

const orbitIcons = [
    { className: 'orbit-icon orbit-icon-one', src: '/icons/laravel.svg', label: 'Laravel' },
    { className: 'orbit-icon orbit-icon-two', src: '/icons/react.svg', label: 'React' },
    { className: 'orbit-icon orbit-icon-three', src: '/icons/php.svg', label: 'PHP' },
    { className: 'orbit-icon orbit-icon-four', src: '/icons/vuejs.svg', label: 'Vue.js' },
];

export default function Contact() {
    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="contact-card" data-reveal>
                    <div className="contact-content">
                        <span className="eyebrow">Contact</span>
                        <h2>Let&apos;s build something great together.</h2>
                        <p>
                            Have a project, a role or just an idea? My inbox is always open. I&apos;ll get
                            back to you as soon as I can.
                        </p>
                        <div className="contact-actions">
                            <a className="btn btn-gradient btn-lg" href={`mailto:${site.email}`}>
                                <i className="bi bi-envelope-paper" aria-hidden="true" />
                                {site.email}
                            </a>
                            <a
                                className="btn btn-outline-soft btn-lg"
                                href={site.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-linkedin" aria-hidden="true" />
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="contact-art" aria-hidden="true">
                        <div className="contact-orbit">
                            {orbitIcons.map((icon) => (
                                <span className={icon.className} key={icon.label}>
                                    <img
                                        className="tech-icon"
                                        src={icon.src}
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                </span>
                            ))}
                            <span className="orbit-core">FA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
