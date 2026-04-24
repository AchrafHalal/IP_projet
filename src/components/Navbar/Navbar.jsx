import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLang } from '../../context/LanguageContext';
import DarkMode from '../DarkMode/DarkMode';
import './Navbar.css';

// --- SVG Flag Components ---
const FlagSV = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: 'block', flexShrink: 0 }}>
    <rect width="20" height="14" fill="#006AA7" />
    <rect x="5.5" width="3" height="14" fill="#FECC02" />
    <rect y="5.5" width="20" height="3" fill="#FECC02" />
  </svg>
);

const FlagEN = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: 'block', flexShrink: 0 }}>
    <rect width="20" height="14" fill="#012169" />
    <path d="M0 0L20 14M20 0L0 14" stroke="white" strokeWidth="2.4" />
    <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.2" />
    <path d="M10 0V14M0 7H20" stroke="white" strokeWidth="3.6" />
    <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2" />
  </svg>
);

const LANGUAGES = [
  { code: "en", label: "English", flag: <FlagEN /> },
  { code: "sv", label: "Svenska", flag: <FlagSV /> },
];

// --- Sub-Component: Language Switcher ---
function LanguageSwitcher({ currentLang, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  
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
        style={{ display: 'flex', alignItems: 'center', padding: '4px 6px' }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {/* TOP LEVEL: Only show the Flag */}
        {current.flag}
        <svg className={`lang-chevron ${open ? "open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: '4px' }}>
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="lang-dropdown" role="listbox" style={{ minWidth: '140px' }}>
          {LANGUAGES.map(({ code, label, flag }) => (
            <button
              key={code}
              className={`lang-option ${currentLang === code ? "active" : ""}`}
              onClick={() => handleSelect(code)}
              role="option"
              aria-selected={currentLang === code}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                width: '100%', 
                padding: '10px 12px',
                textAlign: 'left' 
              }}
            >
              {/* DROPDOWN: Show both Flag and Label */}
              {flag}
              <span className="lang-label-text" style={{ fontSize: '14px' }}>{label}</span>
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const { t, lang, changeLang } = useLang(); 

  const toggleMobileMenu = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${targetId}`;
    }
    closeMobileMenu();
  };

  const NAV_LINKS = [
    { name: t('navbar.links.pricing'), target: "Pricing", isPage: false },
    { name: t('navbar.links.howItWorks'), target: "BuyerJourney", isPage: false },
    { name: t('navbar.links.devices'), target: "compatibility", isPage: false },
    { name: "Blog", target: "/blog", isPage: true },
    { name: t('navbar.links.faq'), target: "FAQ", isPage: false },
  ];

  const WHATSAPP_LINK = "https://wa.me/your-number";

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        <div className="navbar-content">

          <div className="navbar-logo">
            <a href="/#Hero" onClick={(e) => handleScrollToSection(e, 'Hero')}>
              SvenskStream<span className="logo-dot">.</span>
            </a>
          </div>

          <ul className="navbar-links">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.isPage ? link.target : `/#${link.target}`} 
                  onClick={link.isPage ? undefined : (e) => handleScrollToSection(e, link.target)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <div className="utility-group">
              <LanguageSwitcher currentLang={lang} onChange={(selected) => changeLang(selected)} />
              <div className="utility-divider"></div>
              <DarkMode />
            </div>

            <a href="/#Pricing" className="btn-primary" onClick={(e) => handleScrollToSection(e, 'Pricing')}>
              {t('navbar.cta')}
            </a>
          </div>

          <div className="menu-icon" onClick={toggleMobileMenu}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${click ? "active" : ""}`}>
        <ul className="mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a 
                href={link.isPage ? link.target : `/#${link.target}`} 
                onClick={link.isPage ? closeMobileMenu : (e) => handleScrollToSection(e, link.target)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-lang-row">
          <div className="utility-group" style={{ margin: '0 auto' }}>
            <LanguageSwitcher currentLang={lang} onChange={(selected) => changeLang(selected)} />
            <div className="utility-divider"></div>
            <DarkMode />
          </div>
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
  );
}