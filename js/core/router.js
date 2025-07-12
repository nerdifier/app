import { loadPage } from './router.js';

export function bootApp() {
    //get current path
    const path = window.location.pathname;

    if (path === '/' || path === '/index.html') {
        history.replaceState({}, '', '/home');
        loadPage('home.html', 'Home');
        return;
    }

    if (path === '/home') {
        loadPage('home.html', 'Home');
    } else if (path === '/about') {
        loadPage('about.html', 'About');
    } else if (path === '/achievements') {
        loadPage('achievements.html', 'Achievements');
    } else {
        // fallback
        history.replaceState({}, '', '/home');
        loadPage('home.html', 'Home');
    }
}

export function navigateTo(path) {
    history.pushState({}, '', path);
    if (path === '/home') {
        loadPage('home.html', 'Nerdifier');
    } else if (path === '/achievements') {
        loadPage('achievements.html', 'Nerdifier');
    }
}

window.addEventListener('popstate', event => {
    if (event.state && event.state.url) {
        loadPage(event.state.url, event.state.pageTitle);
    }
});