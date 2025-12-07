// ====================================================================
// i18n.js: Internationalization Logic and Dictionary
// This file manages all app interface translations.
// ====================================================================

export const translations = {
    // English (Default)
    'en': {
        'appTitle': 'BooksByNIK',
        'welcome': 'Welcome to BooksByNIK',
        'enterDetails': 'Enter your details to access the catalog.',
        'yourName': 'Your Name',
        'enterNamePlaceholder': 'Enter your full official name',
        'phoneNumber': 'Phone Number',
        'enterNumberPlaceholder': 'e.g., 9876543210 (10 digits)',
        'appLanguage': 'App Language:',
        'loginButton': 'Login / Register',
        'languageNote': 'You can change the language anytime from Profile Settings.',
        'catalog': 'Catalog',
        'untitledBook': 'Untitled Book',
        'unknownAuthor': 'Unknown Author',
        'viewDetails': 'View Details',
        'bookDetails': 'Book Details',
        'clickFullView': 'Click image for full view',
        'description': 'Description',
        'noDescription': 'No description available.',
        'language': 'Language:',
        'pages': 'Pages:',
        'unknown': 'Unknown',
        'addToCart': 'Add to Cart',
        'myProfile': 'My Profile',
        'accountDetails': 'Account Details',
        'changeNote': '*To change Name or Number, you must **Log Out** and re-login.',
        'appSettings': 'App Settings',
        'selectLanguage': 'Select Language:',
        'connectNIK': 'Connect with NIK',
        'logOut': 'Log Out',
        'cartTitle': 'Your Shopping Cart',
        'orderSummary': 'Order Summary',
        'subtotal': 'Subtotal:',
        'total': 'Total:',
        'shippingNote': '*Taxes and shipping are included in the total for simplicity.',
        'cartEmpty': 'Your cart is empty.',
        'checkout': 'Checkout',
        'orderId': 'Order ID:',
        'addedToCart': 'Added to cart.',
        'imageNotFound': 'Image not found.',
        'nameRequired': 'Please enter your full name.',
        'numberRequired': 'Please enter your 10 digit phone number.',
        'invalidNumber': 'Phone number must be exactly 10 digits.',
        'n/a': 'N/A',
        'shippingDetails': 'Shipping Details',
        'fullAddress': 'Full Address (with Pincode)',
        'payNow': 'Pay Now via UPI',
        // Add more strings as needed...
    },
    // Malayalam
    'ml': {
        'appTitle': 'ബുക്ക്സ് ബൈ നിക്',
        'welcome': 'ബുക്ക്സ് ബൈ നിക്-ലേക്ക് സ്വാഗതം',
        'enterDetails': 'കാറ്റലോഗ് കാണാൻ നിങ്ങളുടെ വിവരങ്ങൾ നൽകുക.',
        'yourName': 'നിങ്ങളുടെ പേര്',
        'enterNamePlaceholder': 'നിങ്ങളുടെ പൂർണ്ണമായ ഔദ്യോഗിക പേര് നൽകുക',
        'phoneNumber': 'ഫോൺ നമ്പർ',
        'enterNumberPlaceholder': 'ഉദാഹരണത്തിന്, 9876543210 (10 അക്കങ്ങൾ)',
        'appLanguage': 'ആപ്പ് ഭാഷ:',
        'loginButton': 'ലോഗിൻ / രജിസ്റ്റർ',
        'languageNote': 'പ്രൊഫൈൽ ക്രമീകരണങ്ങളിൽ നിന്ന് നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും ഭാഷ മാറ്റാം.',
        'catalog': 'കാറ്റലോഗ്',
        'untitledBook': 'ശീർഷകമില്ലാത്ത പുസ്തകം',
        'unknownAuthor': 'അജ്ഞാത എഴുത്തുകാരൻ',
        'viewDetails': 'വിശദാംശങ്ങൾ കാണുക',
        'bookDetails': 'പുസ്തക വിവരങ്ങൾ',
        'clickFullView': 'പൂർണ്ണമായി കാണാൻ ചിത്രത്തിൽ ക്ലിക്കുചെയ്യുക',
        'description': 'വിവരണം',
        'noDescription': 'വിവരണം ലഭ്യമല്ല.',
        'language': 'ഭാഷ:',
        'pages': 'പേജുകൾ:',
        'unknown': 'അജ്ഞാതം',
        'addToCart': 'കാർട്ടിലേക്ക് ചേർക്കുക',
        'myProfile': 'എന്റെ പ്രൊഫൈൽ',
        'accountDetails': 'അക്കൗണ്ട് വിവരങ്ങൾ',
        'changeNote': '*പേരോ നമ്പറോ മാറ്റണമെങ്കിൽ **ലോഗ് ഔട്ട്** ചെയ്ത് വീണ്ടും ലോഗിൻ ചെയ്യണം.',
        'appSettings': 'ആപ്പ് ക്രമീകരണങ്ങൾ',
        'selectLanguage': 'ഭാഷ തിരഞ്ഞെടുക്കുക:',
        'connectNIK': 'NIK-മായി ബന്ധപ്പെടുക',
        'logOut': 'ലോഗ് ഔട്ട്',
        'cartTitle': 'നിങ്ങളുടെ ഷോപ്പിംഗ് കാർട്ട്',
        'orderSummary': 'ഓർഡർ സംഗ്രഹം',
        'subtotal': 'സബ്‌ടോട്ടൽ:',
        'total': 'ആകെ:',
        'shippingNote': '*ടാക്സുകളും ഷിപ്പിംഗും ലാളിത്യത്തിനായി ആകെ തുകയിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്നു.',
        'cartEmpty': 'നിങ്ങളുടെ കാർട്ട് ശൂന്യമാണ്.',
        'checkout': 'ചെക്ക് ഔട്ട്',
        'orderId': 'ഓർഡർ ഐഡി:',
        'addedToCart': 'കാർട്ടിലേക്ക് ചേർത്തു.',
        'imageNotFound': 'ചിത്രം കണ്ടെത്തിയില്ല.',
        'nameRequired': 'നിങ്ങളുടെ മുഴുവൻ പേര് നൽകുക.',
        'numberRequired': 'ദയവായി നിങ്ങളുടെ 10 അക്ക ഫോൺ നമ്പർ നൽകുക.',
        'invalidNumber': 'ഫോൺ നമ്പർ കൃത്യം 10 അക്കമായിരിക്കണം.',
        'n/a': 'ലഭ്യമല്ല',
        'shippingDetails': 'ഷിപ്പിംഗ് വിവരങ്ങൾ',
        'fullAddress': 'പൂർണ്ണ വിലാസം (പിൻകോഡ് സഹിതം)',
        'payNow': 'UPI വഴി ഇപ്പോൾ പണമടയ്ക്കുക',
        // Add more strings as needed...
    }
};

/**
 * Gets the current app language from local storage, defaults to English.
 * @returns {string} The app language code ('en' or 'ml').
 */
export function getAppLanguage() {
    return localStorage.getItem('appLanguage') || 'en';
}

/**
 * Sets the app language in local storage and applies the new translations.
 * @param {string} lang - The language code ('en' or 'ml').
 */
export function setLanguage(lang) {
    localStorage.setItem('appLanguage', lang);
    applyTranslations(); // Apply immediately after setting
}

/**
 * Applies translations to the entire page based on the current language.
 */
export function applyTranslations() {
    const lang = getAppLanguage();
    const t = translations[lang] || translations['en'];

    // 1. Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // 2. Update placeholder text (e.g., input fields)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });

    // 3. Update select language dropdown text (Malayalam text for Malayalam option)
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.querySelector('option[value="en"]').textContent = 'English';
        langSelect.querySelector('option[value="ml"]').textContent = 'മലയാളം (Malayalam)';
        
        // Reflect the current selection
        langSelect.value = lang;
    }
}