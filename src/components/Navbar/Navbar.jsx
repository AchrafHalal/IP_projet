import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLang } from '../../context/LanguageContext';
import DarkMode from '../DarkMode/DarkMode';
import './Navbar.css';

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "sv", label: "Svenska" },
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
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="lang-text">{current.code.toUpperCase()}</span>
        <svg className={`lang-chevron ${open ? "open" : ""}`} width="14" height="14" viewBox="0 0 12 12" fill="none">
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="lang-dropdown" role="listbox">
          {LANGUAGES.map(({ code, label }) => (
            <button
              key={code}
              className={`lang-option ${currentLang === code ? "active" : ""}`}
              onClick={() => handleSelect(code)}
              role="option"
              aria-selected={currentLang === code}
            >
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const { t, lang, changeLang } = useLang(); 

  const toggleMobileMenu = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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

  const WHATSAPP_LINK = "https://wa.me/your-number?text=Hi,%20I'm%20interested%20in%20the%201-month%20premium%20pass.";

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        <div className="navbar-content">

          {/* 1. Logo */}
          <div className="navbar-logo">
            <a href="/#Hero" onClick={(e) => handleScrollToSection(e, 'Hero')}>
              SvenskStream<span className="logo-dot">.</span>
            </a>
          </div>

          {/* 2. Desktop Links */}
          <ul className="navbar-links">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                {link.isPage ? (
                  <a href={link.target}>
                    {link.name}
                  </a>
                ) : (
                  <a href={`/#${link.target}`} onClick={(e) => handleScrollToSection(e, link.target)}>
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* 3. Desktop Actions */}
          <div className="navbar-actions">
            
            {/* The new grouped Utility Pill */}
            <div className="utility-group">
              <LanguageSwitcher currentLang={lang} onChange={(selected) => changeLang(selected)} />
              <div className="utility-divider"></div>
              <DarkMode />
            </div>

            <a href="/#Pricing" className="btn-primary" onClick={(e) => handleScrollToSection(e, 'Pricing')}>
              {t('navbar.cta')}
            </a>
          </div>

          {/* 4. Hamburger Icon */}
          <div className="menu-icon" onClick={toggleMobileMenu}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* 5. Mobile Menu Overlay */}
      <div className={`mobile-menu ${click ? "active" : ""}`}>
        <ul className="mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              {link.isPage ? (
                <a href={link.target} onClick={closeMobileMenu}>
                  {link.name}
                </a>
              ) : (
                <a href={`/#${link.target}`} onClick={(e) => handleScrollToSection(e, link.target)}>
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggles */}
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