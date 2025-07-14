export function loadPage(fragmentUrl) {
    fetch(fragmentUrl)
        .then(res => res.text())
        .then(html => {
            const container = document.querySelector('#page1');
            container.innerHTML = html;
            document.title = 'Nerdifier';

            bootstrapFragment(fragmentUrl);
        })
        .catch(err => {
            console.error('Fragment load failed:', err);
            const container = document.querySelector('#page1');
            container.innerHTML = '<p>Page could not be loaded.</p>';
        });
}

function bootstrapFragment(fragmentUrl) {
    const map = {
        'home.html': () => import('../pages/home.js').then(m => m.initHomePage()),
        'achievements.html': () => import('../pages/achievements.js').then(m => m.initAchievementsPage()),
        'music.html': () => import('../pages/music.js').then(m => m.initMusicPage()),
        'profile.html': () => import('../pages/profile.js').then(m => m.initProfilePage()),
        'notes.html': () => import('../pages/notes.js').then(m => m.initNotesPage()),
        'settings.html': () => import('../pages/settings.js').then(m => m.initSettingsPage()),
        'shop.html': () => import('../pages/shop.js').then(m => m.initShopPage()),
        'schedules.html': () => import('../pages/schedules.js').then(m => m.initSchedulesPage())
    };

    const runner = map[fragmentUrl];
    if (runner) runner();
}
