import { renderCharts } from "./chartrender.js";

var exp = 0;
var expMax = 100;
var level = 0;

export function updateExp() {
    while (exp >= expMax) {
        level ++;
        exp -= expMax;
        expMax *= 1.2;
        expMax = Math.floor(expMax)
        const dispLevel = document.getElementById('level');
        dispLevel.textContent = level;
    }
    renderCharts();
}

export function addExp(experience) {
    exp += experience;
    updateExp();
}

export function getExpPercent() {
    const expPercent = (exp / expMax) * 100;
    return expPercent;
}