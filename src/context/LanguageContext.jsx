import { createContext, useContext, useState, useCallback } from "react";
import en from "../translations/en.json";
import sv from "../translations/sv.json";

// ─── All translation bundles ───────────────────────────────────────────────
const TRANSLATIONS = { en, sv };

// ─── Read saved language from localStorage (default: "en") ────────────────
const getSavedLang = () => {
  try {
    const saved = localStorage.getItem("ss_lang");
    return saved && TRANSLATIONS[saved] ? saved : "en";
  } catch {
    return "en";
  }
};

// ─── Context ──────────────────────────────────────────────────────────────
const LanguageContext = createContext(null);

// ─── Provider ─────────────────────────────────────────────────────────────
// ─── Provider ─────────────────────────────────────────────────────────────
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getSavedLang() || "en");

  const changeLang = useCallback((code) => {
    if (!TRANSLATIONS[code]) return;
    setLang(code);
    try {
      localStorage.setItem("ss_lang", code);
    } catch (e) {
      console.error("LocalStorage blocked", e);
    }
  }, []);

  // --- CHANGE THIS PART ---
  // We turn 't' into a function that looks up paths like "navbar.cta"
  const t = useCallback((path) => {
    const keys = path.split('.');
    let result = TRANSLATIONS[lang];

    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        // If key is missing, return the path string so you can see what's wrong
        return path; 
      }
    }
    return result;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────
// Usage in any component:  const { t, lang, changeLang } = useLang();
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}