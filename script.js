// ====================================================================
// A. API Endpoints and Configuration
// ====================================================================

// **YOUR LIVE GOOGLE APPS SCRIPT URLS**
export const API_ENDPOINTS = {
    // CATALOG API (LIVE URL confirmed in screenshots)
    CATALOG_API_ENDPOINT: 'https://script.google.com/macros/s/AKfycbxTglhNy-kHNzaFTghKMUxbqzcD8B1ZW4LxO6mWJaZqmUNt4uV5L3we6kvofEe_hXuL/exec', 
    
    // PROFILE & ORDERS APIs (Placeholder - Must be updated after deployment)
    PROFILE_API_ENDPOINT: 'YOUR_GOOGLE_APPS_SCRIPT_PROFILE_URL_HERE', 
    ORDERS_API_ENDPOINT: 'YOUR_GOOGLE_APPS_SCRIPT_ORDERS_URL_HERE'
};

// **FINAL CORRECT IMAGE HOSTING BASE URL**
// This points to the /cover folder in your specific GitHub Pages deployment.
export const IMAGE_BASE_URL = 'https://floorplancreatornik.github.io/booksbynik-multipage-app/cover/'; 


// ====================================================================
// B. Theme Management (Dark/Light Mode)
// ====================================================================

const THEME_KEY = 'booksbynik_theme';
const currentTheme = localStorage.getItem(THEME_KEY) || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

export function toggleTheme() {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
}

// Function to initialize the theme switch state on load
export function initializeThemeSwitch() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.checked = currentTheme === 'dark';
        themeToggle.addEventListener('change', toggleTheme);
    }
}


// ====================================================================
// C. Internationalization (i18n) - Language Management
// ====================================================================

// Default translations object (add more keys and languages here)
export const translations = {
    "en": {
        "catalog": "Catalog",
        "cart": "Cart",
        "profile": "Profile",
        "search": "Search books...",
        "viewDetails": "View Details",
        "addToCart": "Add to Cart",
        "noBooksFound": "No books found.",
        "languageTitle": "Language:",
        "allLanguages": "All",
        // Technical keywords for filtering (to be translated for the user)
        "malayalam": "Malayalam", 
        "english": "English",
        "fiction": "Fiction",
        "selfhelp": "Self-Help",
        "paperback": "Paperback",
        "hardcover": "Hardcover",
    },
    "ml": {
        "catalog": "കാറ്റലോഗ്",
        "cart": "കാർട്ട്",
        "profile": "പ്രൊഫൈൽ",
        "search": "പുസ്തകങ്ങൾ തിരയുക...",
        "viewDetails": "വിശദാംശങ്ങൾ കാണുക",
        "addToCart": "കാർട്ടിൽ ചേർക്കുക",
        "noBooksFound": "പുസ്തകങ്ങളൊന്നും കണ്ടെത്തിയില്ല.",
        "languageTitle": "ഭാഷ:",
        "allLanguages": "എല്ലാം",
        // Technical keywords for filtering (to be translated for the user)
        "malayalam": "മലയാളം",
        "english": "ഇംഗ്ലീഷ്",
        "fiction": "ഫിക്ഷൻ",
        "selfhelp": "സഹായഗ്രന്ഥങ്ങൾ",
        "paperback": "പേപ്പർബാക്ക്",
        "hardcover": "ഹാർഡ്കവർ",
    }
};

const LANG_KEY = 'booksbynik_lang';
export let currentLang = localStorage.getItem(LANG_KEY) || 'en';

export function getTranslation(key) {
    const langKey = key.toLowerCase(); 
    return translations[currentLang][langKey] || key; 
}

// Function to apply translations across the app
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
    // Use window.fetchCatalog if defined (which it is in home.html)
    if (typeof window.fetchCatalog === 'function') {
        // Reset and fetch data for the new language context
        window.fetchCatalog(true); 
    }
}

// Function to initialize the language selector
export function initializeLanguageSelector() {
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.value = currentLang;
        langSelector.addEventListener('change', (e) => setLanguage(e.target.value));
    }
}


// ====================================================================
// D. Utility Functions
// ====================================================================

/**
 * Removes hyphens from ISBN for use in URLs and cart IDs.
 * @param {string} isbn - The ISBN string, possibly with hyphens.
 * @returns {string} The clean, hyphen-free ISBN.
 */
export function cleanISBN(isbn) {
    return String(isbn).replace(/-/g, '').trim();
}

/**
 * Creates the full public URL for a cover image.
 * @param {string} filename - The cover image filename (e.g., 'alchemist.jpg').
 * @returns {string} The complete public image URL.
 */
export function getCoverImageUrl(filename) {
    if (!filename) return ''; 
    // Construct URL: BASE_URL + filename
    return IMAGE_BASE_URL + encodeURIComponent(filename.trim());
}

/**
 * Takes the comma-separated string from the 'cover' field and returns an array of filenames.
 * @param {string} coverString - The comma-separated image filenames.
 * @returns {string[]} An array of cleaned filenames.
 */
export function splitImages(coverString) {
    if (!coverString || typeof coverString !== 'string') return [];
    
    // Split the string by comma, then trim whitespace from each filename, and filter out any empty strings
    return coverString.split(',')
                      .map(filename => filename.trim())
                      .filter(filename => filename.length > 0);
}


/**
 * Formats a number to currency (INR).
 * @param {number|string} amount - The price amount.
 * @returns {string} Formatted currency string.
 */
export function formatCurrency(amount) {
    const num = parseFloat(amount);
    if (isNaN(num)) return '₹0.00';
    // Use toLocaleString for proper Indian Rupee formatting (e.g., 1,00,000.00)
    return num.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2 });
}

// Initialize theme and language when script loads
document.addEventListener('DOMContentLoaded', () => {
    initializeThemeSwitch();
    applyTranslations();
    initializeLanguageSelector();
});

// Expose utilities globally for access from other HTML files' inline scripts
window.toggleTheme = toggleTheme;
window.setLanguage = setLanguage;
window.getTranslation = getTranslation;
window.cleanISBN = cleanISBN;
window.getCoverImageUrl = getCoverImageUrl;
window.formatCurrency = formatCurrency;
window.splitImages = splitImages;
window.API_ENDPOINTS = API_ENDPOINTS;