export function attachSaveListener() {
    const btn = document.getElementById('save-button');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const userData = {
            username:  document.getElementById('username').value,
            bio:       document.getElementById('bio').value,
            education: document.getElementById('education').value,
            batch:     document.getElementById('batch').value
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        document.querySelectorAll('.first-load')
            .forEach(el => el.style.display = 'none');
        updateGreeting();
    });
}

export function updateGreeting() {
    const raw = localStorage.getItem('userData');
    if (!raw) return;
    const { username } = JSON.parse(raw);
    const span = document.getElementById('greet-user-name');
    if (span) {
        span.textContent = username || '';
    }
}

export function checkFirstVisit() {
    const seen = localStorage.getItem('hasVisited');
    document.querySelectorAll('.first-load')
        .forEach(el => el.style.display = seen ? 'none' : 'block');
    if (!seen) {
        localStorage.setItem('hasVisited', 'true');
    }
}

export function clearAllUserData() {
    localStorage.clear();

    // Optional: visually reflect the reset state
    document.querySelectorAll('.first-load')
        .forEach(el => el.style.display = 'block');

    const greet = document.getElementById('greet-user-name');
    if (greet) greet.textContent = '';

    alert('All data cleared.');
}