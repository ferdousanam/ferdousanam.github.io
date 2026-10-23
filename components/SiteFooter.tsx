import CurrentYear from '@/components/CurrentYear';
import { site, socialLinks } from '@/data/site';

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                    <a className="footer-brand" href="#home">
                        <span className="brand-mark" aria-hidden="true">
                            <img src={site.avatarUrl} alt="" width="32" height="32" />
                        </span>
                        {site.name}
                    </a>

                    <p className="footer-copy mb-0">
                        &copy; <CurrentYear initial={new Date().getFullYear()} /> {site.name}. Built
                        with Next.js &amp; Bootstrap 5.
                    </p>

                    <div className="footer-socials">
                        <a href={`mailto:${site.email}`} aria-label="Email">
                            <i className="bi bi-envelope" aria-hidden="true" />
                        </a>
                        {socialLinks.slice(0, 3).map((link) => (
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
            </div>
        </footer>
    );
}
