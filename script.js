// ====================================================================
// script.js: Shared Constants and Global Functions
// This file is linked by all HTML pages.
// ====================================================================

// --- 1. GOOGLE APPS SCRIPT API ENDPOINTS ---
// (These URLs are confirmed for Catalog, Orders, and your new Profile sheet)
export const API_ENDPOINTS = {
    // 1. Fetches book data for home.html
    CATALOG_API_ENDPOINT: "https://script.google.com/macros/s/AKfycbziBJMiEM0s_deX7L8-JFde6FjZXQYVu6J-1cPa7b3KBNhYSOsUz-9Nczo2LcTrUouj0g/exec", 
    // 2. Submits final order details from checkout.html
    ORDER_API_ENDPOINT: "https://script.google.com/macros/s/AKfycbwkbb81y8szLipovLlQxDrjfy-y-ETpLNuZjHJXokjm8dKd6Px12HqBrtvbCvEvA-7U/exec",
    // 3. Saves login/profile name, number, and language (Your new API)
    PROFILE_API_ENDPOINT: "https://script.google.com/macros/s/AKfycbw8kuI-nMHu4do7WIU-nwqiKNWctP0DQkQbCIEd6Tw0AW3Qi6piDAv5xCRHyPRGkP8J/exec"
};


// --- 2. THEME LOGIC (Used by all pages) ---

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

// Attach the toggle function to the button when the page loads
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});


// --- 3. LANGUAGE LOGIC (Used for app interface text, not book data) ---

/**
 * Gets the current app language from local storage, defaults to English.
 * @returns {string} The app language code ('en' or 'ml').
 */
export function getAppLanguage() {
    return localStorage.getItem('appLanguage') || 'en';
}

/**
 * Sets the app language in local storage.
 * @param {string} lang - The language code ('en' or 'ml').
 */
export function setLanguage(lang) {
    localStorage.setItem('appLanguage', lang);
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

// Call checkLogin on every page load (except index.html and thankyou.html)
const path = window.location.pathname;
if (!path.endsWith('index.html') && !path.endsWith('thankyou.html')) {
    document.addEventListener('DOMContentLoaded', checkLogin);
}