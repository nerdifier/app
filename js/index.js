// time get topnav
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('currentTime').textContent = timeString;
}

// updates every 1000ms
setInterval(updateTime, 1000);
updateTime();

// get cookie function
function getCookie(name) {
    // value of stored cookies assigned to value variable
    const value = `; ${document.cookie}`;
    // split val by semicolon and name
    const parts = value.split(`; ${name}=`);
    // return all parts ex cookie name = first one
    return parts.pop().split(';').shift();
}

//check if first visit
if (!getCookie('hasVisited')) {
  // fist visit
  console.log('fisrt visit')
  // set cookie
  document.cookie = "hasVisited=true; path=/; max-age=" + 60 * 60 * 24 * 365 * 69;
} else {
  // not first visit
  console.log('not first visit');
}









