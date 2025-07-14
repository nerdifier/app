import {
    attachSaveListener,
    updateGreeting,
    checkFirstVisit
} from '../components/user.js';

import { renderCharts } from '../components/chartrender.js';

export function initHomePage() {
    checkFirstVisit();
    attachSaveListener();
    renderCharts();
    updateGreeting();
}