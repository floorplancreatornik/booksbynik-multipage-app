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
    
    // Update the icon across all instances (in theory, only one per page)
    const iconButton = document.getElementById('theme-toggle-icon');
    if (iconButton) {
        iconButton.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    }
}

// Function to initialize the icon button state on load
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
// C. Internationalization (i18n) - Language Management
// ====================================================================

export const translations = {
    "en": {
        "catalog": "Catalog",
        "cart": "Cart",
        "profile": "Profile",
        "checkout": "Checkout",
        "search": "Search books...",
        "viewDetails": "View Details",
        "addToCart": "Add to Cart",
        "noBooksFound": "No books found.",
        "languageTitle": "Language:",
        "allLanguages": "All",
        "malayalam": "Malayalam", 
        "english": "English",
        "name": "Name",
        "phone": "Phone",
        "noEditProfile": "To change your name or phone number, please logout and re-register.",
        "pincode": "Pincode",
        "address": "Address",
        "total": "Total",
    },
    "ml": {
        "catalog": "കാറ്റലോഗ്",
        "cart": "കാർട്ട്",
        "profile": "പ്രൊഫൈൽ",
        "checkout": "ചെക്ക്ഔട്ട്",
        "search": "പുസ്തകങ്ങൾ തിരയുക...",
        "viewDetails": "വിശദാംശങ്ങൾ കാണുക",
        "addToCart": "കാർട്ടിൽ ചേർക്കുക",
        "noBooksFound": "പുസ്തകങ്ങളൊന്നും കണ്ടെത്തിയില്ല.",
        "languageTitle": "ഭാഷ:",
        "allLanguages": "എല്ലാം",
        "malayalam": "മലയാളം",
        "english": "ഇംഗ്ലീഷ്",
        "name": "പേര്",
        "phone": "ഫോൺ",
        "noEditProfile": "നിങ്ങളുടെ പേരോ ഫോൺ നമ്പറോ മാറ്റാൻ, ലോഗൗട്ട് ചെയ്ത് വീണ്ടും രജിസ്റ്റർ ചെയ്യുക.",
        "pincode": "പിൻകോഡ്",
        "address": "വിലാസം",
        "total": "ആകെ",
    }
};

const LANG_KEY = 'booksbynik_lang';
export let currentLang = localStorage.getItem(LANG_KEY) || 'en';

export function getTranslation(key) {
    const langKey = key.toLowerCase().trim(); 
    return translations[currentLang][langKey] || key; 
}

export function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getTranslation(key);
    });
}

export function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations();
    // Update the selector to reflect the change globally
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.value = lang;
    }

    // Attempt to re-fetch the catalog on home.html if the function exists
    if (typeof window.fetchCatalog === 'function') {
        window.fetchCatalog(true); 
    }
}

export function initializeLanguageSelector() {
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.value = currentLang;
        // The event listener now calls the global setLanguage function
        langSelector.addEventListener('change', (e) => setLanguage(e.target.value));
    }
}


// ====================================================================
// D. Utility Functions and Initialization
// ====================================================================

export function cleanISBN(isbn) {
    return String(isbn).replace(/-/g, '').trim();
}

export function getCoverImageUrl(filename) {
    if (!filename) return ''; 
    return IMAGE_BASE_URL + encodeURIComponent(filename.trim());
}

export function splitImages(coverString) {
    if (!coverString || typeof coverString !== 'string') return [];
    return coverString.split(',').map(filename => filename.trim()).filter(filename => filename.length > 0);
}

export function formatCurrency(amount) {
    const num = parseFloat(amount);
    if (isNaN(num)) return '₹0.00';
    return num.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2 });
}

// Function to get the current user profile from local storage
export function getUserProfile() {
    const profileJson = localStorage.getItem('userProfile');
    return profileJson ? JSON.parse(profileJson) : null;
}

// Initialize theme and language when script loads
document.addEventListener('DOMContentLoaded', () => {
    initializeThemeSwitch();
    applyTranslations();
    initializeLanguageSelector();
});

// Expose utilities globally 
window.toggleTheme = toggleTheme;
window.setLanguage = setLanguage;
window.getTranslation = getTranslation;
window.cleanISBN = cleanISBN;
window.getCoverImageUrl = getCoverImageUrl;
window.formatCurrency = formatCurrency;
window.splitImages = splitImages;
window.API_ENDPOINTS = API_ENDPOINTS;
window.getUserProfile = getUserProfile;