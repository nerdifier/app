export const reactiveState = {
    exp: 0,
    level: 0,
    expToNextLevel: 100
};

export function addExp(amount) {
    reactiveState.exp += amount;
    updateExp();
}

export function updateExp() {
    while (reactiveState.exp >= reactiveState.expToNextLevel) {
        reactiveState.exp -= reactiveState.expToNextLevel;
        reactiveState.level++;
        reactiveState.expToNextLevel = Math.floor(reactiveState.expToNextLevel * 1.2);
    }
    const levelEl = document.getElementById('level');
    if (levelEl) {
        levelEl.innerText = reactiveState.level;
    }
}