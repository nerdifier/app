export function loadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const disableLoader = localStorage.getItem('disableLoader');
    if (disableLoader == 'true') loadingScreen.classList.add('hidden');
    if (!loadingScreen) return;

    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 6000);
}

export function disableLoader() {
    localStorage.setItem('disableLoader', true);
    console.log('i think i set the cookie');
}