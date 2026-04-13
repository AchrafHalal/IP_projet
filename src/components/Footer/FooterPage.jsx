import React from "react";
import { MapPin, Mail, Phone } from "lucide-react"; 
import { Link } from "react-router-dom";
import "./FooterStyle.css";

// --- CUSTOM SOCIAL ICONS (SVG) ---
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);
const TikTokIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-dark">
      <div className="fd-container">

        {/* BRAND SECTION (Mirrors Navbar Logo) */}
        <div className="fd-brand-section">
          <h2 className="fd-logo">SvenskStream<span>.</span></h2>
          <p className="fd-desc">
            Premium 4K streaming for the Nordic market. 
            Reliable, fast, and buffer-free entertainment.
          </p>
          <div className="fd-socials">
            <a href="" className="fd-social-icon"><FacebookIcon /></a>
            <a href="" className="fd-social-icon"><InstagramIcon /></a>
            <a href="" className="fd-social-icon"><TelegramIcon /></a>
            <a href="" className="fd-social-icon"><TikTokIcon /></a>
          </div>
        </div>

        {/* SUPPORT & LEGAL GROUP */}
        <div className="fd-links-main">
          <div className="fd-column">
            <h4>Support</h4>
            <ul>
              <li><Link to="/About">About Us</Link></li>
              <li><a href="#FAQ">FAQ</a></li>
              <li><a href="#Contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="fd-column">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* OFFICE CARD (Synchronized Design) */}
        <div className="fd-office-card">
          <h4>Office</h4>
          <div className="fd-office-box">
            <div className="fd-office-row">
              <MapPin size={16} className="fd-office-icon" />
              <p>Bottna Berghem 89, Nora, SE</p>
            </div>
            <div className="fd-office-row">
              <Phone size={16} className="fd-office-icon" />
              <a href="tel:0587-5114142">0587-5114142</a>
            </div>
            <div className="fd-office-row">
              <Mail size={16} className="fd-office-icon" />
              <a href="mailto:contact@Svensk4kStream.se">contact@Svensk4kStream.se</a>
            </div>
          </div>
        </div>

      </div>

      <div className="fd-bottom">
        <p>© {currentYear} SvenskStream. All rights reserved.</p>
      </div>
    </footer>
  );
}