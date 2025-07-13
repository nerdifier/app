import { loadPage } from './router.js';

export function bootApp() {
    // get last path segment
    const segments = window.location.pathname.split('/');
    const last = segments.pop() || segments.pop(); // handles trailing slash
    const path = last.toLowerCase(); //normalise

    switch (path) {
        case '':
        case 'index.html':
            history.replaceState({}, '', '/home');
            loadPage('home.html', 'Nerdifier');
            break;

        case 'home':
            loadPage('home.html', 'Nerdifier');
            break;

        case 'achievements':
            loadPage('achievements.html', 'Nerdifier');
            break;

        case 'music':
            loadPage('music.html', 'Nerdifier');
            break;

        case 'notes':
            loadPage('notes.html', 'Nerdifier');
            break;

        case 'profile':
            loadPage('profile.html', 'Nerdifier');
            break;

        case 'schedules':
            loadPage('schedules.html', 'Nerdifier');
            break;

        case 'settings':
            loadPage('settings.html', 'Nerdifier');
            break;

        case 'shop':
            loadPage('shop.html', 'Nerdifier');
            break;

        default:
            history.replaceState({}, '', '/home');
            loadPage('home.html', 'Nerdifier');
            break;
    }
}