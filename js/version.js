export function updateVersion() {
    const interval = setInterval(() => {
        const ver = document.getElementById('version');
        if (ver) {
            ver.textContent = 'v0.0.0.9';
            console.log('Version updated');
            clearInterval(interval);
        }
    }, 500);
}