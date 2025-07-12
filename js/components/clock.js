export function updateTime() {
    const now = new Date();
    const el  = document.getElementById('currentTime');
    if (el) {
        el.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}