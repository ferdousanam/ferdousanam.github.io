import { earlierProjects, featuredProjects } from '@/data/projects';
import { delayStyle } from '@/lib/style';

export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-heading text-center" data-reveal>
                    <span className="eyebrow">Selected work</span>
                    <h2>Projects I&apos;m proud to have built</h2>
                    <p className="section-lead mx-auto">
                        Enterprise platforms I&apos;m building today, alongside earlier products across
                        property management, car rental, travel and e-commerce.
                    </p>
                </div>

                <div className="projects-subheading" data-reveal>
                    <h3>Featured enterprise work</h3>
                    <span>Current platforms and products</span>
                </div>

                <div className="row g-4">
                    {featuredProjects.map((project) => (
                        <div className="col-lg-4" data-reveal key={project.title} style={delayStyle(project.delay)}>
                            <article className="project-card project-card-featured h-100">
                                <div
                                    className={`project-cover project-cover-${project.cover}`}
                                    aria-hidden="true"
                                >
                                    <span className="project-cover-company">{project.company}</span>
                                    <span className="project-cover-icon">
                                        <i className={project.icon} />
                                    </span>
                                    <span className="project-cover-title">{project.title}</span>
                                </div>

                                <div className="project-body">
                                    <div className="project-meta">
                                        <span>{project.category}</span>
                                        <span className="meta-dot" aria-hidden="true" />
                                        <span>{project.stack}</span>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <ul className="tech-list" aria-label="Technologies used">
                                        {project.tech.map((tech) => (
                                            <li key={tech}>{tech}</li>
                                        ))}
                                    </ul>
                                    <span className="project-link project-link-muted">
                                        {project.status}
                                        <i className="bi bi-lock" aria-hidden="true" />
                                    </span>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                <div className="projects-subheading projects-subheading-secondary" data-reveal>
                    <h3>Earlier projects</h3>
                    <span>Production work across property, travel and e-commerce</span>
                </div>

                <div className="row g-4">
                    {earlierProjects.map((project) => (
                        <div className="col-lg-6" data-reveal key={project.title} style={delayStyle(project.delay)}>
                            <article className="project-card h-100">
                                <a
                                    className="project-media glightbox"
                                    href={project.image.src}
                                    data-gallery="projects"
                                    data-title={project.lightbox.title}
                                    data-description={project.lightbox.description}
                                >
                                    <img
                                        src={project.image.src}
                                        alt={project.image.alt}
                                        loading="lazy"
                                        width={project.image.width}
                                        height={project.image.height}
                                    />
                                    <span className="project-overlay">
                                        <i className="bi bi-arrows-fullscreen" aria-hidden="true" />
                                        <span>View screenshot</span>
                                    </span>
                                </a>

                                <div className="project-body">
                                    <div className="project-meta">
                                        <span>{project.category}</span>
                                        <span className="meta-dot" aria-hidden="true" />
                                        <span>{project.stack}</span>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <ul className="tech-list" aria-label="Technologies used">
                                        {project.tech.map((tech) => (
                                            <li key={tech}>{tech}</li>
                                        ))}
                                    </ul>

                                    {project.href ? (
                                        <a
                                            className="project-link"
                                            href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Visit website
                                            <i className="bi bi-arrow-up-right" aria-hidden="true" />
                                        </a>
                                    ) : (
                                        <span className="project-link project-link-muted">
                                            {project.status}
                                            <i className="bi bi-lock" aria-hidden="true" />
                                        </span>
                                    )}
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
