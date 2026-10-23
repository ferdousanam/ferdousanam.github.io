import Timeline from '@/components/Timeline';
import { experience } from '@/data/experience';

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <div className="section-heading text-center" data-reveal>
                    <span className="eyebrow">Experience</span>
                    <h2>Building products and leading teams</h2>
                    <p className="section-lead mx-auto">
                        I lead technology and product delivery at OSHNI SOFTWARE, working across enterprise
                        ERP, healthcare and warranty platforms.
                    </p>
                </div>

                <Timeline entries={experience} />
            </div>
        </section>
    );
}
