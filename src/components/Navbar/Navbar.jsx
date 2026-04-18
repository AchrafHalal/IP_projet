import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLang } from '../../context/LanguageContext';
import DarkMode from '../DarkMode/DarkMode';
import './Navbar.css';

// --- Constants & Assets ---
const WHATSAPP_LINK = "https://wa.me/your-number?text=Hi,%20I'm%20interested%20in%20the%201-month%20premium%20pass.";

const FlagSV = () => (
  <svg width="16" height="11" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: 'block' }}>
    <rect width="16" height="11" fill="#006AA7" />
    <rect x="5.5" width="3" height="14" fill="#FECC02" />
    <rect y="5.5" width="20" height="3" fill="#FECC02" />
  </svg>
);

const FlagEN = () => (
  <svg width="16" height="11" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: 'block' }}>
    <rect width="16" height="11" fill="#012169" />
    <path d="M0 0L20 14M20 0L0 14" stroke="white" strokeWidth="2.4" />
    <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.2" />
    <path d="M10 0V14M0 7H20" stroke="white" strokeWidth="3.6" />
    <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2" />
  </svg>
);

const LANGUAGES = [
  { code: "en", label: "English", Flag: FlagEN },
  { code: "sv", label: "Svenska", Flag: FlagSV },
];

// --- Sub-Component: Language Switcher ---
function LanguageSwitcher({ currentLang, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  
  // Use the currentLang passed from Navbar to find the active flag
  const current = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    setOpen(false);
    onChange?.(code);
  };

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className={`lang-trigger ${open ? "open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <current.Flag />
        <span>{current.code.toUpperCase()}</span>
        <svg className={`lang-chevron ${open ? "open" : ""}`} viewBox="0 0 12 12" fill="none">
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="lang-dropdown" role="listbox">
          {LANGUAGES.map(({ code, label, Flag }) => (
            <button
              key={code}
              className={`lang-option ${currentLang === code ? "active" : ""}`}
              onClick={() => handleSelect(code)}
              role="option"
              aria-selected={currentLang === code}
            >
              <Flag />
              <span>{label}</span>
              {currentLang === code && <span className="lang-dot" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Main Component: Navbar ---
export default function Navbar() {
  const [click, setClick] = useState(false);
  const { t, lang, changeLang } = useLang(); 

  const toggleMobileMenu = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const NAV_LINKS = [
    { name: t('navbar.links.pricing'), href: "/#Pricing" },
    { name: t('navbar.links.howItWorks'), href: "/#BuyerJourney" },
    { name: t('navbar.links.devices'), href: "/#compatibility" },
    { name: t('navbar.links.faq'), href: "/#FAQ" },
  ];

  return (
    <>
      {/* Top Right Corner Switcher */}
      <div className="lang-corner">
        {/* Pass 'lang' and 'changeLang' from context */}
        <DarkMode />
        <LanguageSwitcher currentLang={lang} onChange={(selected) => changeLang(selected)} />
      </div>

      <div className="navbar-wrapper">
        <nav className="navbar-container">
          <div className="navbar-content">

            <div className="navbar-logo">
              <a href="/#Hero" onClick={closeMobileMenu}>
                SvenskStream<span className="logo-dot">.</span>
              </a>
            </div>

            <ul className="navbar-links">
              {NAV_LINKS.map((link) => (
                <li key={link.name}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>

            <div className="navbar-cta">
              <a href="/#Pricing" className="btn-primary">{t('navbar.cta')}</a>
            </div>

            <div className="menu-icon" onClick={toggleMobileMenu}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${click ? "active" : ""}`}>
          <ul className="mobile-links">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={closeMobileMenu}>{link.name}</a>
              </li>
            ))}
          </ul>

          <div className="mobile-lang-row">
              <DarkMode />
            <LanguageSwitcher currentLang={lang} onChange={(selected) => changeLang(selected)} />
          </div>

          <div className="mobile-promo-box">
            <span className="promo-badge">{t('navbar.promo.badge')}</span>
            <h4>{t('navbar.promo.title')}</h4>
            <p>{t('navbar.promo.text')}</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-promo-cta" onClick={closeMobileMenu}>
              {t('navbar.promo.btn')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}