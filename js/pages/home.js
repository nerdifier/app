import {
    attachSaveListener,
    updateGreeting,
    checkFirstVisit
} from '../components/user.js';
import { renderCharts } from '../components/chartrender.js';
import { setupNavigation } from '../components/navigation.js';

export function initHomePage() {
    setupNavigation();
    checkFirstVisit();
    attachSaveListener();
    renderCharts();
    updateGreeting();
}