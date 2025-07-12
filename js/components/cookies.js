export function getCookie(name) {
    const parts = (`; ${document.cookie}`).split(`; ${name}=`);
    return parts.pop().split(';').shift();
}