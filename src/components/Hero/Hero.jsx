import { useState, useRef, useMemo } from 'react';
import { FaWhatsapp, FaStar, FaCheckCircle } from 'react-icons/fa';
import { useLang } from '../../context/LanguageContext';
import './Hero.css';

// Keep constants outside the component to prevent re-creation on render
const WHATSAPP_BASE_URL = "https://wa.me/YOUR_NUMBER_HERE?text=";

export default function Hero() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { t } = useLang();

  // Optimized Mouse Tracker
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const { left, top } = heroRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  // Data-driven list for cleaner JSX
  const guarantees = [
    t('hero.guarantees.visuals'),
    t('hero.guarantees.performance'),
    t('hero.guarantees.support')
  ];

  const whatsappLink = useMemo(() => 
    `${WHATSAPP_BASE_URL}${encodeURIComponent(t('hero.cta_whatsapp'))}`, 
  [t]);

  return (
    <section 
      className="hero-clean" 
      id="Hero" 
      ref={heroRef} 
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': `${mousePos.x}px`, '--mouse-y': `${mousePos.y}px` }}
    >
      <div className="dot-grid-base" />
      <div className="dot-grid-highlight" />

      <div className="hero-content-wrapper">
        <div className="hero-text-side">
          
          {/* Trust Indicator */}
          <div className="trust-indicator">
            <div className="avatar-group">
              {['H', 'M', 'Z', 'T'].map((initial, i) => (
                <div key={i} className={`avatar avatar-${i + 1}`}>{initial}</div>
              ))}
            </div>
            <div className="trust-text-container">
                <span><strong>1,000+</strong> {t('hero.trust')}</span>
                <div className="stars">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
            </div>
          </div>

          {/* Headline & Subhead */}
          <h1 className="hero-headline">
            {t('hero.headline_1')} <br />
            <span className="accent-text">{t('hero.headline_accent')}</span>
          </h1>
          
          <p className="hero-subhead">{t('hero.subhead')}</p>

          {/* Call to Actions */}
          <div className="hero-ctas">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-massive">
              <FaWhatsapp className="icon-large" /> {t('hero.cta_whatsapp')}
            </a>
            
            <a href="#Pricing" className="btn-secondary-ghost">
              {t('hero.cta_plans')}
            </a>
          </div>

          {/* Guarantees List */}
          <div className="hero-guarantees">
            {guarantees.map((text, index) => (
              <div key={index} className="guarantee-item">
                <FaCheckCircle className="guarantee-icon"/>
                <span className="guarantee-title">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}