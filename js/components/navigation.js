import { loadPage } from '../core/router.js';

export function setupNavigation() {
    const links = document.querySelectorAll('[data-fragment]');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const page = link.getAttribute('data-fragment');
            if (page) loadPage(page);
        });
    });
}