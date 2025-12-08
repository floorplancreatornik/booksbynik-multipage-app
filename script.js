// ====================================================================
// A. API Endpoints and Configuration
// ====================================================================

// **YOUR LIVE GOOGLE APPS SCRIPT URLS - All Verified Except Orders**
export const API_ENDPOINTS = {
    // 1. LOGIN/REGISTER (Needs doPost) - VERIFIED URL
    PROFILE_API_ENDPOINT: 'https://script.google.com/macros/s/AKfycbxr5Xa9utQAQPH5QKbFq9aY34DmgU86wnoby95ns0bDMSZYlQPgjvmcFgvsYxDJEA8OYg/exec', 
    
    // 2. CATALOG (Needs doGet) - VERIFIED URL
    CATALOG_API_ENDPOINT: 'https://script.google.com/macros/s/AKfycbxTglhNy-kHNzaFTghKMUxbqzcD8B1ZW4LxO6mWJaZqmUNt4uV5L3we6kvofEe_hXuL/exec', 
    
    // 3. CHECKOUT/ORDERS (Needs doPost) - PLACEHOLDER
    ORDERS_API_ENDPOINT: 'YOUR_GOOGLE_APPS_SCRIPT_ORDERS_URL_HERE'
};

// **IMAGE HOSTING BASE URL**
export const IMAGE_BASE_URL = 'https://floorplancreatornik.github.io/booksbynik-multipage-app/cover/'; 

// Import language functions from the separate i18n file
import { applyTranslations } from './i18n.js';


// ====================================================================
// B. Theme Management (Dark/Light Mode - SVG Icon Based)
// ====================================================================

const THEME_KEY = 'booksbynik_theme';
const currentTheme = localStorage.getItem(THEME_KEY) || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// SVG path definitions for reliable colorless rendering
const SUN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.64 5.378a.75.75 0 0 1 .632 1.282l-1.5.75a.75.75 0 0 1-.632-1.282l1.5-.75ZM4.5 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 12ZM7.64 18.622a.75.75 0 0 1-.632-1.282l1.5-.75a.75.75 0 0 1 .632 1.282l-1.5.75ZM12 18.75a.75.75 0 0 1-.75.75v2.25a.75.75 0 0 1 1.5 0v-2.25a.75.75 0 0 1-.75-.75ZM16.36 18.622a.75.75 0 0 1 .632-.322l1.5.75a.75.75 0 0 1-.632 1.282l-1.5-.75a.75.75 0 0 1-.632-1.282ZM19.5 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5h2.25c.414 0 .75.336.75.75ZM16.36 5.378a.75.75 0 0 1-.632.322l-1.5-.75a.75.75 0 0 1 .632-1.282l1.5.75c.348.174.453.606.223.953ZM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Z"/></svg>`;
const MOON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M9.544 3.078a.75.75 0 0 0-.826.177C6.88 5.765 5.25 9.179 5.25 12a7.5 7.5 0 0 0 14.28 3.52 7.02 7.02 0 0 1-5.35-8.484.75.75 0 0 0-.176-.828Z" /></svg>`;

function renderThemeIcon(theme) {
    const iconPlaceholder = document.getElementById('theme-icon-placeholder');
    if (iconPlaceholder) {
        iconPlaceholder.innerHTML = theme === 'dark' ? MOON_SVG : SUN_SVG;
    }
}

export function toggleTheme() {
    const root = document.documentElement;
    const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    
    // Update the SVG icon based on the new theme
    renderThemeIcon(newTheme);
}

export function initializeThemeSwitch() {
    // Set initial theme icon state
    renderThemeIcon(currentTheme);
    
    const iconButton = document.getElementById('theme-toggle-icon');
    if (iconButton) {
        // Attach click listener
        iconButton.addEventListener('click', toggleTheme);
    }
}

// ====================================================================
// C. Utility Functions
// ====================================================================

export function getUserProfile() {
    const profileJson = localStorage.getItem('userProfile');
    return profileJson ? JSON.parse(profileJson) : null;
}

export function formatCurrency(amount) {
    const num = parseFloat(amount);
    if (isNaN(num)) return '₹0.00';
    return num.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2 });
}

export function splitImages(coverString) {
    if (!coverString || typeof coverString !== 'string') return [];
    return coverString.split(',').map(filename => filename.trim()).filter(filename => filename.length > 0);
}

export function getCoverImageUrl(filename) {
    if (!filename) return ''; 
    return IMAGE_BASE_URL + encodeURIComponent(filename.trim());
}

// ====================================================================
// D. Initialization
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Theme State
    initializeThemeSwitch();
    // Apply translations on load
    applyTranslations();
});