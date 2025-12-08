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
        "viewdetails": "View Details",
        "addtocart": "Add to Cart",
        "nobooksfound": "No books found.",
        "languagetitle": "Language:",
        "alllanguages": "All",
        "malayalam": "Malayalam", 
        "english": "English",
        "name": "Name",
        "phone": "Phone",
        "noeditprofile": "To change your name or phone number, please logout and re-register.",
        "pincode": "Pincode",
        "address": "Address",
        "total": "Total",
        
        // Login Page Specific Keys
        "booksbynik": "BooksByNIK",
        "loginorregister": "Login or Register",
        "enteryourfullofficialname": "Enter Your Full Official Name",
        "enteryour10digitphonenumber": "Enter your 10 digit phone number",
        "loginregister": "Login / Register",
        "profile_note_change": "(You can switch language anytime from profile settings)"
    },
    "ml": {
        "catalog": "കാറ്റലോഗ്",
        "cart": "കാർട്ട്",
        "profile": "പ്രൊഫൈൽ",
        "checkout": "ചെക്ക്ഔട്ട്",
        "search": "പുസ്തകങ്ങൾ തിരയുക...",
        "viewdetails": "വിശദാംശങ്ങൾ കാണുക",
        "addtocart": "കാർട്ടിൽ ചേർക്കുക",
        "nobooksfound": "പുസ്തകങ്ങളൊന്നും കണ്ടെത്തിയില്ല.",
        "languagetitle": "ഭാഷ:",
        "alllanguages": "എല്ലാം",
        "malayalam": "മലയാളം",
        "english": "ഇംഗ്ലീഷ്",
        "name": "പേര്",
        "phone": "ഫോൺ",
        "noeditprofile": "നിങ്ങളുടെ പേരോ ഫോൺ നമ്പറോ മാറ്റാൻ, ലോഗൗട്ട് ചെയ്ത് വീണ്ടും രജിസ്റ്റർ ചെയ്യുക.",
        "pincode": "പിൻകോഡ്",
        "address": "വിലാസം",
        "total": "ആകെ",
        
        // Login Page Specific Keys
        "booksbynik": "ബുക്സ്ബൈനിക്ക്",
        "loginorregister": "ലോഗിൻ / രജിസ്റ്റർ",
        "enteryourfullofficialname": "നിങ്ങളുടെ പൂർണ്ണമായ ഔദ്യോഗിക പേര് നൽകുക",
        "enteryour10digitphonenumber": "നിങ്ങളുടെ 10 അക്ക ഫോൺ നമ്പർ നൽകുക",
        "loginregister": "ലോഗിൻ / രജിസ്റ്റർ",
        "profile_note_change": "(പ്രൊഫൈൽ ക്രമീകരണങ്ങളിൽ നിന്ന് നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും ഭാഷ മാറ്റാവുന്നതാണ്)"
    }
};

const LANG_KEY = 'booksbynik_lang';
export let currentLang = localStorage.getItem(LANG_KEY) || 'en';

export function getTranslation(key) {
    const langKey = key.toLowerCase().trim(); 
    return translations[currentLang][langKey] || key; 
}

export function applyTranslations() {
    // 1. Translate inner text content (h1, h2, buttons, static text)
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getTranslation(key);
    });
    
    // 2. Translate placeholder attributes (inputs)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
             element.setAttribute('placeholder', getTranslation(key));
        }
    });
}

export function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations();
    
    // Update the header language selector on other pages
    const headerLangSelector = document.getElementById('lang-selector');
    if (headerLangSelector) {
        headerLangSelector.value = lang;
    }

    // Trigger catalog refresh on home.html if necessary
    if (typeof window.fetchCatalog === 'function') {
        window.fetchCatalog(true); 
    }
}