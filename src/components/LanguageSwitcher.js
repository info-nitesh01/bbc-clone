'use client';
import { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';

const COOKIE_NAME = 'googtrans';

const LanguageSwitcher = () => {
    const [currentLanguage, setCurrentLanguage] = useState('');
    const [languageConfig, setLanguageConfig] = useState({ languages: [], defaultLanguage: 'en' });

    useEffect(() => {
        const cookies = parseCookies();
        const existingLanguageCookieValue = cookies[COOKIE_NAME];

        let languageValue = '';
        if (existingLanguageCookieValue) {
            const sp = existingLanguageCookieValue.split('/');
            if (sp.length > 2) {
                languageValue = sp[2];
            }
        }

        if (typeof global !== 'undefined' && global.__GOOGLE_TRANSLATION_CONFIG__) {
            const config = global.__GOOGLE_TRANSLATION_CONFIG__;
            setLanguageConfig(config);

            if (!languageValue) {
                languageValue = '';
            }
        }

        setCurrentLanguage(languageValue);
    }, []);

    const handleChange = (e) => {
        const lang = e.target.value;
        if (!lang) return;

        setCookie(null, COOKIE_NAME, '/auto/' + lang, { path: '/' });
        window.location.reload();
    };


    if (!languageConfig.languages.length) return null;

    return (
        <div className="my-4 notranslate">
            <select
                value=""
                onChange={handleChange}
                className="px-3 py-2 border-0 fw-semibold text-dark bgGrey rounded-0 fs-16"
            >
                <option value="">BBC in other language</option>
                {languageConfig.languages.map((ld) => (
                    <option key={ld.name} value={ld.name}>
                        {ld.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export { LanguageSwitcher, COOKIE_NAME };
