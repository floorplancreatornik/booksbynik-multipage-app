// ====================================================================
// A. Language Data (Translations)
// ====================================================================

const translations = {
    en: {
        // --- General ---
        "booksbynik": "BooksByNIK",
        "loginorregister": "Login or Register",
        "loginregister": "Login / Register",
        "profile": "Profile",
        "cart": "Cart",
        "home": "Home",
        "english": "English",
        "malayalam": "മലയാളം",

        // --- Login Page (index.html) ---
        "enteryourfullofficialname": "Enter Your Full Official Name",
        "enteryour10digitphonenumber": "Enter your 10 digit phone number",
        "profile_note_change": "(You can switch language anytime from profile settings)",

        // --- Catalog Page (home.html) ---
        "catalog": "Book Catalog",
        "searchbooks": "Search Books...",
        "bestsellers": "Bestsellers",
        "allbooks": "All Books",
        "price": "Price:",
        "pages": "Pages:",
        "language": "Language:",
        "format": "Format:",
        "addtocart": "Add to Cart",

        // --- Cart Page (cart.html) ---
        "yourcart": "Your Cart",
        "checkout": "Proceed to Checkout",
        "emptycart": "Your cart is empty.",
        "subtotal": "Subtotal",
        "delivery": "Delivery Charges",
        "total": "Total Amount",
        "continue_shopping": "Continue Shopping",
        
        // --- Profile Page (profile.html) ---
        "editprofile": "Edit Profile",
        "currentlanguage": "Current Language",
        "pincode": "Pincode",
        "address": "Address",
        "updateprofile": "Update Profile",
        "logout": "Logout"
    },
    ml: {
        // --- General ---
        "booksbynik": "ബുക്ക്‌സ്‌ബൈനിക്കിൾ",
        "loginorregister": "പ്രവേശിക്കുക / രജിസ്റ്റർ ചെയ്യുക",
        "loginregister": "പ്രവേശിക്കുക / രജിസ്റ്റർ ചെയ്യുക",
        "profile": "പ്രൊഫൈൽ",
        "cart": "കാർട്ട്",
        "home": "ഹോം",
        "english": "English",
        "malayalam": "മലയാളം",

        // --- Login Page (index.html) ---
        "enteryourfullofficialname": "നിങ്ങളുടെ പൂർണ്ണമായ ഔദ്യോഗിക നാമം നൽകുക",
        "enteryour10digitphonenumber": "നിങ്ങളുടെ 10 അക്ക ഫോൺ നമ്പർ നൽകുക",
        "profile_note_change": "(പ്രൊഫൈൽ ക്രമീകരണങ്ങളിൽ നിന്ന് നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും ഭാഷ മാറ്റാം)",

        // --- Catalog Page (home.html) ---
        "catalog": "പുസ്തക കാറ്റലോഗ്",
        "searchbooks": "പുസ്തകങ്ങൾ തിരയുക...",
        "bestsellers": "ഏറ്റവും കൂടുതൽ വിറ്റുപോകുന്നവ",
        "allbooks": "എല്ലാ പുസ്തകങ്ങളും",
        "price": "വില:",
        "pages": "പേജുകൾ:",
        "language": "ഭാഷ:",
        "format": "ഫോർമാറ്റ്:",
        "addtocart": "കാർട്ടിൽ ചേർക്കുക",

        // --- Cart Page (cart.html) ---
        "yourcart": "നിങ്ങളുടെ കാർട്ട്",
        "checkout": "ചെക്കൗട്ടിലേക്ക് പോകുക",
        "emptycart": "നിങ്ങളുടെ കാർട്ട് ശൂന്യമാണ്.",
        "subtotal": "ആകെത്തുക",
        "delivery": "ഡെലിവറി നിരക്കുകൾ",
        "total": "ആകെ തുക",
        "continue_shopping": "ഷോപ്പിംഗ് തുടരുക",
        
        // --- Profile Page (profile.html) ---
        "editprofile": "പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക",
        "currentlanguage": "നിലവിലെ ഭാഷ",
        "pincode": "പിൻകോഡ്",
        "address": "വിലാസം",
        "updateprofile": "പ്രൊഫൈൽ അപ്ഡേറ്റ് ചെയ്യുക",
        "logout": "ലോഗൗട്ട്"
    }
};

// ====================================================================
// B. Core Functions
// ====================================================================

/**
 * Applies translations to all elements with data-i18n attributes.
 * Uses the language stored in localStorage or defaults to 'en'.
 */
export function applyTranslations() {
    // Get the current language from localStorage or user profile, default to English
    const profileJson = localStorage.getItem('userProfile');
    const userLang = profileJson ? JSON.parse(profileJson).language : localStorage.getItem('appLang') || 'en';
    
    setLanguage(userLang);
}


/**
 * Sets the active language and applies translations to the document.
 * @param {string} langCode - The two-letter language code (e.g., 'en', 'ml').
 */
export function setLanguage(langCode) {
    const langData = translations[langCode] || translations.en;
    
    // 1. Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key] || element.textContent;
    });

    // 2. Update placeholder text
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = langData[key] || element.placeholder;
    });
    
    // 3. Save the active language for future use
    localStorage.setItem('appLang', langCode);
}