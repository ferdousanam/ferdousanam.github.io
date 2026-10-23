import { skillGroups, stacks, type SkillIcon } from '@/data/skills';
import { delayStyle, levelStyle } from '@/lib/style';

function SkillIconView({ icon }: { icon: SkillIcon }) {
    if (icon.type === 'image') {
        return (
            <img
                className="tech-icon"
                src={icon.src}
                alt=""
                width="20"
                height="20"
                loading="lazy"
            />
        );
    }

    return <i className={icon.className} aria-hidden="true" />;
}

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-heading text-center" data-reveal>
                    <span className="eyebrow">Skills</span>
                    <h2>Tools I use to build things</h2>
                    <p className="section-lead mx-auto">
                        A practical toolkit shaped by real projects — from database design and APIs to
                        polished, responsive interfaces.
                    </p>
                </div>

                <div className="stack-grid" data-reveal>
                    {stacks.map((stack) => (
                        <article
                            className={`stack-card${stack.primary ? ' stack-card-primary' : ''}`}
                            key={stack.title}
                        >
                            <div className="stack-card-top">
                                <span className="stack-index">{stack.index}</span>
                                <span className="stack-icons">
                                    {stack.icons.map((icon, index) => (
                                        <SkillIconView icon={icon} key={index} />
                                    ))}
                                </span>
                            </div>
                            <h3>{stack.title}</h3>
                            <p>{stack.description}</p>
                            {stack.badge ? <span className="pill">{stack.badge}</span> : null}
                        </article>
                    ))}
                </div>

                <div className="row g-4">
                    {skillGroups.map((group) => (
                        <div className="col-lg-4" data-reveal key={group.title} style={delayStyle(group.delay)}>
                            <div className="skill-group h-100">
                                <div className="skill-group-head">
                                    <span className="skill-group-icon">
                                        <i className={group.icon} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <h3>{group.title}</h3>
                                        <p>{group.subtitle}</p>
                                    </div>
                                </div>

                                {group.skills.map((skill) => (
                                    <div className="skill-item" key={skill.name}>
                                        <div className="skill-label">
                                            <SkillIconView icon={skill.icon} />
                                            <span>{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div
                                            className="skill-track"
                                            role="progressbar"
                                            aria-label={`${skill.name} proficiency`}
                                            aria-valuenow={skill.level}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <span
                                                className="skill-bar"
                                                style={levelStyle(skill.level)}
                                            />
                                        </div>
                                    </div>
                                ))}

                                {group.note ? (
                                    <div className="skill-note">
                                        <i className="bi bi-stars" aria-hidden="true" />
                                        <p>
                                            <strong>Currently learning:</strong> {group.note}
                                        </p>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
