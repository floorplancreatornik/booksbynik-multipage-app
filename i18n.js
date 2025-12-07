export function getAppLanguage() {
    return localStorage.getItem('appLanguage') || 'en';
}

export function setLanguage(lang) {
    localStorage.setItem('appLanguage', lang);
    applyTranslations();
}

export function applyTranslations() {
    const lang = getAppLanguage();
    const t = translations[lang] || translations['en'];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
}

// Language dictionary
export const translations = {
    // ENGLISH (en)
    en: {
        appTitle: "BooksByNIK",
        welcome: "Welcome to BooksByNIK",
        enterDetails: "Enter your details to access the catalog.",
        yourName: "Your Name",
        phoneNumber: "Phone Number (10 digits)",
        appLanguage: "App Language:",
        languageNote: "You can change the language anytime from Profile Settings.",
        loginButton: "Login / Register",
        enterNamePlaceholder: "Enter your full official name",
        enterNumberPlaceholder: "Enter 10 digit Mobile number",
        nameRequired: "Please enter your official name.",
        numberRequired: "Please enter a valid 10-digit phone number.",
        
        // General UI elements (used in other pages)
        catalog: "Catalog",
        viewDetails: "View Details",
        bookDetails: "Book Details",
        description: "Description",
        language: "Language",
        pages: "Pages",
        addToCart: "Add to Cart",
        addedToCart: "Item added to cart!",
        cartTitle: "Your Shopping Cart",
        orderSummary: "Order Summary",
        subtotal: "Subtotal:",
        total: "Total:",
        shippingNote: "*Taxes and shipping are included in the total for simplicity.",
        checkout: "Checkout",
        cartEmpty: "Your cart is empty.",
        myProfile: "My Profile",
        accountDetails: "Account Details",
        changeNote: "*To change Name or Number, you must Log Out and re-login.",
        appSettings: "App Settings",
        selectLanguage: "Select Language:",
        connectNIK: "Connect with NIK",
        logOut: "Log Out",
        shippingDetails: "Shipping Details",
        fullAddress: "Full Address (with Pincode)",
        payNow: "Pay Now via UPI",
        
        // Data Fallbacks
        untitledBook: "Untitled Book",
        unknownAuthor: "Unknown Author",
        n_a: "N/A",
        unknown: "Unknown",
        noDescription: "No description available.",
        clickFullView: "Click image for full view",
        imageNotFound: "Image not found."
    },
    
    // MALAYALAM (ml)
    ml: {
        appTitle: "ബുക്ക്സ് ബൈ നിക്",
        welcome: "ബുക്ക്സ് ബൈ നിക്-ലേക്ക് സ്വാഗതം",
        enterDetails: "കാറ്റലോഗ് കാണാൻ നിങ്ങളുടെ വിവരങ്ങൾ നൽകുക.",
        yourName: "നിങ്ങളുടെ പേര്",
        phoneNumber: "ഫോൺ നമ്പർ (10 അക്കങ്ങൾ)",
        appLanguage: "ആപ്പ് ഭാഷ:",
        languageNote: "പ്രൊഫൈൽ ക്രമീകരണങ്ങളിൽ നിന്ന് നിങ്ങൾക്ക് എപ്പോഴും ഭാഷ മാറ്റാം.",
        loginButton: "ലോഗിൻ / രജിസ്റ്റർ",
        enterNamePlaceholder: "നിങ്ങളുടെ പൂർണ്ണമായ ഔദ്യോഗിക നാമം നൽകുക",
        enterNumberPlaceholder: "10 അക്ക മൊബൈൽ നമ്പർ നൽകുക",
        nameRequired: "ദയവായി നിങ്ങളുടെ ഔദ്യോഗിക നാമം നൽകുക.",
        numberRequired: "ദയവായി സാധുതയുള്ള 10 അക്ക ഫോൺ നമ്പർ നൽകുക.",

        // --- CONCISE NAV BAR TWEAKS ---
        catalog: "കാറ്റലോഗ്", // Concise: Catalog
        cartTitle: "കാർട്ട്", // Concise: Cart
        myProfile: "പ്രൊഫൈൽ", // Concise: Profile

        viewDetails: "വിശദാംശങ്ങൾ കാണുക",
        bookDetails: "പുസ്തക വിശദാംശങ്ങൾ",
        description: "വിവരണം",
        language: "ഭാഷ",
        pages: "പേജുകൾ",
        addToCart: "കാർട്ടിലേക്ക് ചേർക്കുക",
        addedToCart: "ഇനം കാർട്ടിലേക്ക് ചേർത്തു!",
        orderSummary: "ഓർഡർ സംഗ്രഹം",
        subtotal: "സബ്‌ടോട്ടൽ:",
        total: "ആകെ:",
        shippingNote: "*നികുതികളും ഷിപ്പിംഗും ലാളിത്യത്തിനായി ആകെ തുകയിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്നു.",
        checkout: "ചെക്കൗട്ട്",
        cartEmpty: "നിങ്ങളുടെ കാർട്ട് ശൂന്യമാണ്.",
        accountDetails: "അക്കൗണ്ട് വിശദാംശങ്ങൾ",
        changeNote: "*പേരോ നമ്പറോ മാറ്റാൻ, നിങ്ങൾ ലോഗ് ഔട്ട് ചെയ്ത് വീണ്ടും ലോഗിൻ ചെയ്യണം.",
        appSettings: "ആപ്പ് ക്രമീകരണങ്ങൾ",
        selectLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക:",
        connectNIK: "നിക്കുമായി ബന്ധപ്പെടുക",
        logOut: "ലോഗ് ഔട്ട്",
        shippingDetails: "ഷിപ്പിംഗ് വിശദാംശങ്ങൾ",
        fullAddress: "പൂർണ്ണ വിലാസം (പിൻകോഡ് സഹിതം)",
        payNow: "UPI വഴി പണം നൽകുക",

        // Data Fallbacks
        untitledBook: "തലക്കെട്ടില്ലാത്ത പുസ്തകം",
        unknownAuthor: "അജ്ഞാത എഴുത്തുകാരൻ",
        n_a: "ലഭ്യമല്ല",
        unknown: "അജ്ഞാതം",
        noDescription: "വിവരണം ലഭ്യമല്ല.",
        clickFullView: "പൂർണ്ണമായി കാണാൻ ചിത്രത്തിൽ ക്ലിക്കുചെയ്യുക",
        imageNotFound: "ചിത്രം കണ്ടെത്തിയില്ല."
    }
};

document.addEventListener('DOMContentLoaded', applyTranslations);