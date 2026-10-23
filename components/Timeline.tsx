import type { TimelineEntry } from '@/data/experience';
import { delayStyle } from '@/lib/style';

type TimelineProps = {
    entries: TimelineEntry[];
};

export default function Timeline({ entries }: TimelineProps) {
    return (
        <div className="timeline">
            {entries.map((entry) => (
                <article
                    className="timeline-item"
                    data-reveal
                    key={`${entry.period}-${entry.title}`}
                    style={delayStyle(entry.delay)}
                >
                    <span className="timeline-icon" aria-hidden="true">
                        <i className={entry.icon} />
                    </span>
                    <div className="timeline-card">
                        <span className="timeline-period">{entry.period}</span>
                        <h3>{entry.title}</h3>
                        <p className="timeline-role">{entry.role}</p>
                        <p className="timeline-description">{entry.description}</p>
                        <div className={entry.tags.length > 1 ? 'experience-tags' : undefined}>
                            {entry.tags.map((tag) => (
                                <span className="pill" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
