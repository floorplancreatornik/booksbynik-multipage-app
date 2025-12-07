// --- API Endpoints ---
export const API_ENDPOINTS = {
    // NOTE: Replace these with your actual published Google Apps Script URLs
    CATALOG_API_ENDPOINT: 'YOUR_GOOGLE_APPS_SCRIPT_CATALOG_URL_HERE', 
    PROFILE_API_ENDPOINT: 'YOUR_GOOGLE_APPS_SCRIPT_PROFILE_URL_HERE', 
    ORDERS_API_ENDPOINT: 'YOUR_GOOGLE_APPS_SCRIPT_ORDERS_URL_HERE'
};

// --- Theme Management ---

/** Sets the theme in localStorage and updates the 'dark' class on the HTML element. */
function setStoredTheme(isDark) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
}

/** Toggles the visibility of the sun/moon icons based on the current theme. */
function updateThemeIcons(isDark) {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    if (sunIcon && moonIcon) {
        sunIcon.classList.toggle('hidden', !isDark); // Show sun (light icon) in dark mode
        moonIcon.classList.toggle('hidden', isDark);  // Show moon (dark icon) in light mode
    }
}

/** Toggles the theme between light and dark. */
export function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    setStoredTheme(!isDark);
    updateThemeIcons(!isDark);
}

/** Initializes the theme based on stored preference or system setting. */
export function initializeTheme() {
    // Check if the script is running in a page that contains a body (i.e., not just a worker)
    if (!document.body) return;

    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let isDark;
    if (storedTheme === 'dark') {
        isDark = true;
    } else if (storedTheme === 'light') {
        isDark = false;
    } else {
        isDark = systemPrefersDark; // Default to system preference
    }
    
    // Apply the class to the document root immediately
    document.documentElement.classList.toggle('dark', isDark);
    updateThemeIcons(isDark);
}

// --- Authentication Guard ---
export function checkAuth() {
    const userNumber = localStorage.getItem('userNumber');
    const currentPath = window.location.pathname;
    // Check if the current page is the index.html or the root path
    const isLoginPage = currentPath.includes('index.html') || currentPath.endsWith('/');

    if (!userNumber && !isLoginPage) {
        // Not logged in and not on the login page, redirect to login
        window.location.replace('index.html');
        return false;
    }
    if (userNumber && isLoginPage) {
        // Logged in and on the login page, redirect to home
        window.location.replace('home.html');
        return false;
    }
    return true; // Auth is good for this page
}

// Ensure theme is initialized as soon as the DOM is available
document.addEventListener('DOMContentLoaded', initializeTheme);