var level = 0;
var exp = 0;
var expToNextLevel = 100;


function updateLevel() {
    if (exp >= expToNextLevel) {
        exp -= expToNextLevel;
        level++;
        expToNextLevel = Math.floor(expToNextLevel * 1.2);
        document.getElementById("level").innerText = level;
    }
}

function addExp(amount) {
    exp += amount;
    updateLevel();
}