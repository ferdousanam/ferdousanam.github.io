import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page not found',
    description: 'The page you are looking for does not exist or has been moved.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <main className="not-found" id="main">
            <div className="container">
                <div className="not-found-content">
                    <div className="not-found-code gradient-text">404</div>
                    <h1>This page went off the map.</h1>
                    <p>
                        The page you are looking for does not exist or has been moved. Let&apos;s get you
                        back to the portfolio.
                    </p>
                    <a className="btn btn-gradient btn-lg" href="/">
                        <i className="bi bi-arrow-left" aria-hidden="true" />
                        Back to home
                    </a>
                </div>
            </div>
        </main>
    );
}
