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
    // Ensure case-insensitive and trimmed key lookup
    const langKey = key.toLowerCase().trim(); 
    return translations[currentLang][langKey] || key; 
}

export function applyTranslations() {
    // Finds all elements with data-i18n attribute and updates their text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getTranslation(key);
    });
}

export function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations();
    
    // Update the header language selector on other pages (home/profile/checkout)
    const headerLangSelector = document.getElementById('lang-selector');
    if (headerLangSelector) {
        headerLangSelector.value = lang;
    }

    // Trigger catalog refresh on home.html if necessary
    if (typeof window.fetchCatalog === 'function') {
        window.fetchCatalog(true); 
    }
}