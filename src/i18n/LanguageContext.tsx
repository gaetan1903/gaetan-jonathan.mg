import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

export type Language = "fr" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation cache
let translationsCache: Record<Language, Record<string, string>> = { fr: {}, en: {} };
let loaded = false;

async function loadTranslations() {
    if (loaded) return;
    const [frMod, enMod] = await Promise.all([
        import("./translations/fr"),
        import("./translations/en"),
    ]);
    translationsCache.fr = frMod.default;
    translationsCache.en = enMod.default;
    loaded = true;
}

// Eagerly load
loadTranslations();

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        const stored = localStorage.getItem("lang");
        if (stored === "fr" || stored === "en") return stored;
        // Detect browser language
        const browserLang = navigator.language.slice(0, 2);
        return browserLang === "fr" ? "fr" : "en";
    });

    const [, forceUpdate] = useState(0);

    useEffect(() => {
        loadTranslations().then(() => forceUpdate((n) => n + 1));
    }, []);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
    }, []);

    const toggleLanguage = useCallback(() => {
        setLanguage(language === "fr" ? "en" : "fr");
    }, [language, setLanguage]);

    const t = useCallback(
        (key: string): string => {
            return translationsCache[language][key] || translationsCache.fr[key] || key;
        },
        [language]
    );

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
    return ctx;
}
