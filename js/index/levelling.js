

//use a proxy to check for changes in global variables exp and level
let reactiveState = new Proxy({}, {
    set(target, prop, value) {
        target[prop] = value;
        
        if (prop === 'exp') {
            window.exp = value;
            updateExp();
        } else if (prop === 'level') {
            window.level = value;
        } else if (prop === 'expToNextLevel') {
            window.expToNextLevel = value;
        }

        return true;
    },
    get(target, prop) {
        if (prop === 'exp') return window.exp;
        if (prop === 'level') return window.level;
        if (prop === 'expToNextLevel') return window.expToNextLevel;
        return target[prop];
    }
});

function updateExp() {
    let experienceAmount = (reactiveState.exp / reactiveState.expToNextLevel) * 360;
    let emptyAmount = 360 - experienceAmount;

    document.getElementById("pie-xp").style.background =
        `conic-gradient(
            #aef359 ${experienceAmount}deg,
            #000000 0deg ${emptyAmount}deg
        )`;

    if (reactiveState.exp >= reactiveState.expToNextLevel) {
        updateLevel();
    }
}

function updateLevel() {
    reactiveState.exp -= reactiveState.expToNextLevel;
    reactiveState.level++;
    reactiveState.expToNextLevel = Math.floor(reactiveState.expToNextLevel * 1.2);
    document.getElementById("level").innerText = reactiveState.level;
    updateExp();
}

function addExp(amount) {
    reactiveState.exp += amount;
}