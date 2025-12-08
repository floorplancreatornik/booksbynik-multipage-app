// ====================================================================
// A. API Endpoints and Configuration
// ====================================================================

// **YOUR LIVE GOOGLE APPS SCRIPT URLS**
export const API_ENDPOINTS = {
    // CATALOG API (LIVE URL provided earlier)
    CATALOG_API_ENDPOINT: 'https://script.google.com/macros/s/AKfycbxTglhNy-kHNzaFTghKMUxbqzcD8B1ZW4LxO6mWJaZqmUNt4uV5L3we6kvofEe_hXuL/exec', 
    
    // PROFILE API (NEWLY DEPLOYED URL for Login/Registration)
    PROFILE_API_ENDPOINT: 'https://script.google.com/macros/s/AKfycbzhNRvQnWRomo_VNXNoIFXXsvKdUvzOKqD2EFZcQzdIYfNWnIi0OKk3bP0ISRAPwQM/exec', 
    
    // ORDERS APIs (Placeholder - To be updated later)
    ORDERS_API_ENDPOINT: 'YOUR_GOOGLE_APPS_SCRIPT_ORDERS_URL_HERE'
};

// **IMAGE HOSTING BASE URL**
export const IMAGE_BASE_URL = 'https://floorplancreatornik.github.io/booksbynik-multipage-app/cover/'; 

// Import language functions from the separate i18n file
import { applyTranslations } from './i18n.js';


// ====================================================================
// B. Theme Management (Dark/Light Mode - Icon Based)
// ====================================================================

const THEME_KEY = 'booksbynik_theme';
const currentTheme = localStorage.getItem(THEME_KEY) || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

export function toggleTheme() {
    const root = document.documentElement;
    const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    
    // Update the icon based on the new theme
    const iconButton = document.getElementById('theme-toggle-icon');
    if (iconButton) {
        iconButton.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    }
}

export function initializeThemeSwitch() {
    const iconButton = document.getElementById('theme-toggle-icon');
    if (iconButton) {
        // Set initial icon state
        iconButton.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
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