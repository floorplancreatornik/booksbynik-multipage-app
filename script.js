// ====================================================================
// script.js: Shared Constants and Global Functions
// Core file for APIs, Theme, Auth, and running i18n setup.
// ====================================================================

// --- 1. IMPORT i18n Logic ---
import { applyTranslations, setLanguage, getAppLanguage, translations } from './i18n.js';

// --- 2. GOOGLE APPS SCRIPT API ENDPOINTS ---
export const API_ENDPOINTS = {
    CATALOG_API_ENDPOINT: "https://script.google.com/macros/s/AKfycbziBJMiEM0s_deX7L8-JFde6FjZXQYVu6J-1cPa7b3KBNhYSOsUz-9Nczo2LcTrUouj0g/exec",
    ORDER_API_ENDPOINT: "https://script.google.com/macros/s/AKfycbwkbb81y8szLipovLlQxDrjfy-y-ETpLNuZjHJXokjm8dKd6Px12HqBrtvbCvEvA-7U/exec",
    PROFILE_API_ENDPOINT: "https://script.google.com/macros/s/AKfycbw8kuI-nMHu4do7WIU-nwqiKNWctP0DQkQbCIEd6Tw0AW3Qi6piDAv5xCRHyPRGkP8J/exec"
};


// --- 3. THEME LOGIC (Used by all pages) ---

/**
 * Applies the selected theme based on local storage or system preference.
 */
export function applyTheme() {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = (storedTheme === 'dark' || (!storedTheme && prefersDark));

    document.body.classList.toggle('dark', isDark);

    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    if (sunIcon && moonIcon) {
        sunIcon.classList.toggle('hidden', !isDark);
        moonIcon.classList.toggle('hidden', isDark);
    }
}

/**
 * Toggles the theme between dark and light mode.
 */
export function toggleTheme() {
    const isDark = document.body.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme();
}


// --- 4. AUTH GUARD (Simple check before loading protected pages) ---

/**
 * Checks if the user has logged in (has a profile saved locally) 
 * and redirects to index.html if not.
 */
export function checkLogin() {
    const userName = localStorage.getItem('userName');
    const userNumber = localStorage.getItem('userNumber');
    // If user info is missing, redirect them to the login page.
    if (!userName || !userNumber) {
        if (!window.location.pathname.endsWith('index.html')) {
            window.location.replace('index.html');
        }
    }
}

// Attach listeners and run initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    // NEW: Run the translation logic imported from i18n.js
    applyTranslations(); 
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});


// Call checkLogin on every page load (except index.html and thankyou.html)
const path = window.location.pathname;
if (!path.endsWith('index.html') && !path.endsWith('thankyou.html')) {
    document.addEventListener('DOMContentLoaded', checkLogin);
}

// Re-export i18n functions/objects needed by other files (e.g., home.html needs translations object)
export { applyTranslations, setLanguage, getAppLanguage, translations };