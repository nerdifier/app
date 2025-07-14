// bootap
import { bootApp } from './core/init.js';
import { clearAllUserData } from './components/user.js';
import { setupNavigation } from './components/navigation.js';
import { addExp } from './components/exp.js';

window.clearAllUserData = clearAllUserData;
window.addExp = addExp;

window.addEventListener('DOMContentLoaded', () => {
    bootApp();
    setupNavigation();
});

// page finder
const scriptTag =
    document.currentScript ||
    document.querySelector('script[src$="main.js"]');
const page = scriptTag.dataset.page;

// basic logic
(async () => {
    // clock
    const { updateTime } = await import('./components/clock.js');
    updateTime();
    setInterval(updateTime, 1000);

    // cookie importer
    const { getCookie } = await import('./components/cookies.js');

    // bootstraps
    switch (page) {
        case 'home':
            {
                const { initHomePage } = await import('./pages/home.js');
                initHomePage();
            }
            break;
        case 'index':
        default:
            {
                const { bootApp } = await import('./core/init.js');
                bootApp();
            }
            break;
    }
})  ();