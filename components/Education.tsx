import Timeline from '@/components/Timeline';
import { education } from '@/data/experience';

export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container">
                <div className="section-heading text-center" data-reveal>
                    <span className="eyebrow">Education</span>
                    <h2>Where the foundation was built</h2>
                    <p className="section-lead mx-auto">
                        A formal computer science background paired with hands-on experience shipping
                        production applications.
                    </p>
                </div>

                <Timeline entries={education} />
            </div>
        </section>
    );
}
