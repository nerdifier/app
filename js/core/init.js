import { loadPage } from './router.js';

export function bootApp() {
    let path = window.location.pathname.trim().toLowerCase();

    // normalization
    const isRoot = path === '/' || path === '/index.html' || path === '';

    if (isRoot) {
        // hot url
        history.replaceState({}, '', '/home');
        loadPage('home.html', 'Home');
        return;
    }

    // paths
    switch (path) {
        case '/home':
            loadPage('home.html', 'Home');
            break;
        case '/about':
            loadPage('about.html', 'About');
            break;
        case '/achievements':
            loadPage('achievements.html', 'Achievements');
            break;
        default:
            // fallback
            history.replaceState({}, '', '/home');
            loadPage('home.html', 'Home');
            break;
    }
}