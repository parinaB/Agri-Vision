document.addEventListener('DOMContentLoaded', () => {
    let translations = {};
    const langSelector = document.getElementById('lang-selector');

    // Load translations from JSON
    fetch('/static/js/i18n.json')
        .then(response => response.json())
        .then(data => {
            translations = data;

            // Get language from localStorage, default to 'en'
            const savedLang = localStorage.getItem('lang') || 'en';

            // Apply language to page immediately
            applyLanguage(savedLang);

            // Sync the selector with the saved state
            if (langSelector) langSelector.value = savedLang;
        });

    function applyLanguage(lang) {
        if (!translations[lang]) return;

        // Translate all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'OPTION') {
                    el.innerText = translations[lang][key];
                } else {
                    // Replace text nodes, keeping potential child elements (like icons) intact
                    el.childNodes.forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
                            node.textContent = translations[lang][key];
                        }
                    });
                }
            }
        });

        // Persist language choice
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
    }

    // Attach listener for changes
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            applyLanguage(e.target.value);
        });
    }
});
