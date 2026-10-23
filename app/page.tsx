import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function HomePage() {
    return (
        <main id="main">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Education />
            <Skills />
            <Contact />
        </main>
    );
}
