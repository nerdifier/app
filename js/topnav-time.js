// time get topnav
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('currentTime').textContent = timeString;
}

// updates every 1000ms
setInterval(updateTime, 1000);
updateTime();