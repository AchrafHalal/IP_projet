import React, { useEffect } from "react";
import { useLang } from '../../context/LanguageContext';
import "./Pricing.css";
import { Check, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function Pricing() {
  const { t } = useLang();

  /**
   * IMPORTANT: In a custom context, t('path') returns exactly what is in the JSON.
   * If 'pricing.features' is an array in your JSON, featuresList will be an array.
   * We use Array.isArray() to prevent the ".map is not a function" error.
   */
  const rawFeatures = t('pricing.features');
  const featuresList = Array.isArray(rawFeatures) ? rawFeatures : [];

  // --- SCROLL REVEAL OBSERVER ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1 }); 

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); 
  }, []);

  return (
    <section className="pricing-section" id="Pricing">
      <div className="pricing-header">
        <div className="section-badge reveal">{t('pricing.header.badge')}</div>
        <h2 className="section-title reveal delay-1">{t('pricing.header.title')}</h2>
        <p className="section-subtitle reveal delay-2">
          {t('pricing.header.subtitle')}
        </p>
        
        <div className="social-proof reveal delay-3">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} color="#facc15" fill="#facc15" />
            ))}
          </div>
          {/* Using dangerouslySetInnerHTML to support <strong> tags in your JSON */}
          <span dangerouslySetInnerHTML={{ __html: t('pricing.header.socialProof') }} />
        </div>
      </div>

      {/* The VIP Ticket Banner */}
      <div className="vip-ticket-container reveal delay-4">
        <div className="vip-ticket">
          <div className="ticket-content">
            <h3>
              <Sparkles size={24} color="#facc15" fill="#facc15" className="ticket-icon" /> 
              {t('pricing.vip.title')}
            </h3>
            <p>{t('pricing.vip.subtitle')}</p>
          </div>
          <a 
            href={`https://wa.me/YOUR_NUMBER_HERE?text=${encodeURIComponent(t('pricing.vip.button'))}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="ticket-btn"
          >
            {t('pricing.vip.button')}
          </a>
        </div>
      </div>

      {/* The Pricing Cards Grid */}
      <div className="pricing-grid">
        
        {/* Card 1: 6 Months */}
        <div className="pricing-card reveal delay-1">
          <div className="card-header">
            <h4 className="plan-name">{t('pricing.plans.sixMonth.name')}</h4>
            <div className="plan-price">
              <span className="currency">$</span>69
            </div>
            <div className="price-breakdown">
              <span className="monthly-equivalent">
                {t('pricing.plans.only')} <strong>$11.50</strong>{t('pricing.plans.perMonth')}
              </span>
              <span className="payment-type">✔ {t('pricing.plans.oneTime')}</span>
            </div>
            <p className="plan-desc">{t('pricing.plans.sixMonth.desc')}</p>
          </div>
          <ul className="feature-list">
            {featuresList.map((feature, i) => (
              <li key={i}>
                <Check size={18} className="check-icon" /> {feature}
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/YOUR_NUMBER_HERE?text=Plan%206%20Months" 
            className="plan-btn outline-btn"
          >
            {t('pricing.plans.choose')}
          </a>
        </div>

        {/* Card 2: 3 Months (Highlighted) */}
        <div className="pricing-card highlighted reveal delay-2">
          <div className="popular-badge">{t('pricing.plans.popular')}</div>
          <div className="card-header">
            <h4 className="plan-name">{t('pricing.plans.threeMonth.name')}</h4>
            <div className="plan-price">
              <span className="currency">$</span>29
            </div>
            <div className="price-breakdown">
              <span className="monthly-equivalent">
                {t('pricing.plans.only')} <strong>$9.66</strong>{t('pricing.plans.perMonth')}
              </span>
              <span className="payment-type">✔ {t('pricing.plans.noContract')}</span>
            </div>
            <p className="plan-desc">{t('pricing.plans.threeMonth.desc')}</p>
          </div>
          <ul className="feature-list">
            {featuresList.map((feature, i) => (
              <li key={i}>
                <Check size={18} className="check-icon" /> {feature}
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/YOUR_NUMBER_HERE?text=Plan%203%20Months" 
            className="plan-btn solid-btn"
          >
            {t('pricing.plans.start')}
          </a>
        </div>

        {/* Card 3: 12 Months */}
        <div className="pricing-card reveal delay-3">
          <div className="card-header">
            <h4 className="plan-name">{t('pricing.plans.twelveMonth.name')}</h4>
            <div className="plan-price">
              <span className="currency">$</span>89
            </div>
            <div className="price-breakdown">
              <span className="monthly-equivalent">
                {t('pricing.plans.only')} <strong>$7.41</strong>{t('pricing.plans.perMonth')}
              </span>
              <span className="payment-type">✔ {t('pricing.plans.savings')}</span>
            </div>
            <p className="plan-desc">{t('pricing.plans.twelveMonth.desc')}</p>
          </div>
          <ul className="feature-list">
            {featuresList.map((feature, i) => (
              <li key={i}>
                <Check size={18} className="check-icon" /> {feature}
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/YOUR_NUMBER_HERE?text=Plan%2012%20Months" 
            className="plan-btn outline-btn"
          >
            {t('pricing.plans.choose')}
          </a>
        </div>
      </div>

      {/* Shared Features Block */}
      <div className="shared-features-container reveal">
        <p className="shared-features-title">{t('pricing.guarantee.title')}</p>
        <div className="shared-features-grid">
          {featuresList.map((feature, i) => (
            <span className="feature-pill" key={`pill-${i}`}>
              <Check size={16} /> {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Trust Guarantee Banner */}
      <div className="guarantee-banner reveal delay-1">
        <div className="guarantee-icon-wrapper">
          <ShieldCheck size={32} />
        </div>
        <div className="guarantee-text">
          <h4>{t('pricing.guarantee.refundTitle')}</h4>
          <p>{t('pricing.guarantee.refundDesc')}</p>
        </div>
      </div>

      {/* Secure Checkout Footer */}
      <div className="secure-checkout reveal delay-2">
        <span className="checkout-text">{t('pricing.footer.secure')}</span>
        <div className="payment-icons">
          <span className="pay-badge">VISA</span>
          <span className="pay-badge">MasterCard</span>
          <span className="pay-badge">PayPal</span>
          <span className="pay-badge">Crypto</span>
        </div>
      </div>
    </section>
  );
}