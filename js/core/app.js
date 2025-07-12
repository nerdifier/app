import { bootApp }    from './init.js';
import { updateTime } from '../components/clock.js';

window.addEventListener('DOMContentLoaded', () => {
    bootApp();
    updateTime();
    setInterval(updateTime, 1000);
});