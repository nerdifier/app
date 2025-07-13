export function loadPage(fragmentUrl, pageTitle) {
    fetch(fragmentUrl)
        .then(res => res.text())
        .then(html => {
            document.querySelector('#page1').innerHTML = html;
            document.title = pageTitle;
        })
        .catch(err => {
            console.error('Fragment load failed:', err);
            document.querySelector('#page1').innerHTML = '<p>Page not found.</p>';
        });
}

export function navigateTo(path) {
    history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
}

window.addEventListener('popstate', event => {
    if (event.state && event.state.url) {
        loadPage(event.state.url, event.state.pageTitle);
    }
});