import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [click, setClick] = useState(false); // Controls mobile menu state

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Listen for scroll events to trigger the animation
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

  const whatsappLink = "https://wa.me/YOUR_NUMBER?text=Hi,%20I'm%20interested%20in%20the%201-month%20premium%20pass.";

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        <div className="navbar-content">

          {/* 1. Logo Section */}
          <div className="navbar-logo">
            <a href="#Hero" onClick={closeMobileMenu}>LOGO</a>
          </div>

          {/* 2. Desktop Links (Hidden on Mobile) */}
          <ul className="navbar-links">
            <li><a href="#Pricing">Pricing</a></li>
            <li><a href="#BuyerJourney">How it Works</a></li>
            <li><a href="#compatibility">Devices</a></li>
            <li><a href="#FAQ">FAQ</a></li>
          </ul>

          {/* 3. Desktop CTA Button (Hidden on Mobile) */}
          <div className="navbar-cta">
            <a href="#Pricing" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* 4. Hamburger Icon (Visible ONLY on Mobile) */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

        </div>
      </nav>

      {/* 5. MOBILE MENU DROPDOWN */}
      <div className={click ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-links">
          <li><a href="#Pricing" onClick={closeMobileMenu}>Pricing</a></li>
          <li><a href="#BuyerJourney" onClick={closeMobileMenu}>How it Works</a></li>
          <li><a href="#compatibility" onClick={closeMobileMenu}>Devices</a></li>
          <li><a href="#FAQ" onClick={closeMobileMenu}>FAQ</a></li>
        </ul>

        {/* The "Sneaky" In-Menu Promo Box */}
        <div className="mobile-promo-box">
          <span className="promo-badge">🔥 Limited Offer</span>
          <h4>1-Month Premium Pass</h4>
          <p>Skip the trial limits. Get full 4K access for 30 days at a massive discount.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-promo-cta" onClick={closeMobileMenu}>
            Claim Offer
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;