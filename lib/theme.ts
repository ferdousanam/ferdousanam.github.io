export const themeInitScript = `(() => {
    try {
        const stored = localStorage.getItem('fa-theme');
        const theme = stored === 'light' || stored === 'dark'
            ? stored
            : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        document.documentElement.dataset.bsTheme = theme;
    } catch {
        document.documentElement.dataset.bsTheme = 'dark';
    }

    document.documentElement.classList.add('js');
})();`;
