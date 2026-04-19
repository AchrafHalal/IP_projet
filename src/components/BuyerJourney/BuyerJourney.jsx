import React, { useState } from "react";
import { useLang } from '../../context/LanguageContext';
import "./BuyerJourney.css";
import { MessageCircle, CreditCard, Landmark } from 'lucide-react';

// ── Plan step content ────────────────────────────────────────────────
function PlanStep({ t }) {
  const [selected, setSelected] = useState(1);
  
  // Combine static data (prices/logic) with translated data (names/badges)
  const plansData = t('buyerJourney.step1.plans') || [];
  const plans = [
    { id: 0, price: "10$", connections: 1, ...plansData[0] },
    { id: 1, price: "25$", connections: 2, ...plansData[1] },
    { id: 2, price: "45$", connections: 2, ...plansData[2] },
    { id: 3, price: "70$", connections: 3, ...plansData[3] },
  ];

  return (
    <div className="bj-plan-step-container">
      <div className="bj-plan-grid">
        {plans.map((p) => (
          <button
            key={p.id}
            className={`bj-plan-card ${selected === p.id ? "bj-plan-card--active" : ""}`}
            onClick={() => setSelected(p.id)}
          >
            {p.badge && <span className="bj-plan-badge">{p.badge}</span>}
            <div className="bj-plan-name">{p.name}</div>
            <div className="bj-plan-price">{p.price}</div>
            <div className="bj-plan-detail">
              {p.connections} {p.connections > 1 ? t('buyerJourney.step1.connections_plural') : t('buyerJourney.step1.connections')}
            </div>
            <div className="bj-plan-detail">{t('buyerJourney.step1.devices')}</div>
          </button>
        ))}
      </div>
      
      <a
        href="https://wa.me/YOUR_NUMBER?text=I want to subscribe"
        target="_blank"
        rel="noopener noreferrer"
        className="bj-cta-btn"
      >
        {t('buyerJourney.step1.cta')} →
      </a>
    </div>
  );
}

// ── Contact step content ─────────────────────────────────────────────
function ContactStep({ t }) {
  return (
    <div className="bj-contact-wrap">
      <div className="bj-contact-card">
        <div className="bj-contact-icon">💬</div>
        <div>
          <p className="bj-contact-title">{t('buyerJourney.step2.cardTitle')}</p>
          <p className="bj-contact-desc">{t('buyerJourney.step2.cardDesc')}</p>
        </div>
      </div>

      <div className="bj-info-rows">
        <div className="bj-info-row">
          <span className="bj-info-icon">⚡</span>
          <span dangerouslySetInnerHTML={{ __html: t('buyerJourney.step2.replyTime') }} />
        </div>
        <div className="bj-info-row">
          <span className="bj-info-icon">🌍</span>
          <span dangerouslySetInnerHTML={{ __html: t('buyerJourney.step2.availability') }} />
        </div>
        <div className="bj-info-row">
          <span className="bj-info-icon">🔒</span>
          <span dangerouslySetInnerHTML={{ __html: t('buyerJourney.step2.privacy') }} />
        </div>
      </div>

      <a
        href="https://wa.me/YOUR_NUMBER?text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        className="bj-cta-btn bj-cta-green"
      >
        <span style={{ fontSize: "18px" }}>💬</span>
        {t('buyerJourney.step2.cta')} →
      </a>
    </div>
  );
}

// ── Payment step content ─────────────────────────────────────────────
function PaymentStep({ t }) {
  const WHATSAPP_LINK = "https://wa.me/YOUR_NUMBER?text=Payment confirmation";

  return (
    <div className="bj-payment-wrap">
      <div className="bj-payment-header">
        <span className="bj-payment-label">{t('buyerJourney.step3.methodLabel')}</span>
        <div className="bj-payment-badges">
          <span className="bj-pay-badge">💳 {t('buyerJourney.step3.badges.card')}</span>
          <span className="bj-pay-badge">🏦 {t('buyerJourney.step3.badges.bank')}</span>
        </div>
      </div>

      <div className="bj-payment-methods">
        <div className="bj-method-card">
          <div className="bj-method-icon"><CreditCard size={22} color="#000000" /></div>
          <div>
            <p className="bj-method-title">{t('buyerJourney.step3.stripe.title')}</p>
            <p className="bj-method-desc">{t('buyerJourney.step3.stripe.desc')}</p>
          </div>
        </div>

        <div className="bj-method-card">
          <div className="bj-method-icon"><Landmark size={22} color="#001A46" /></div>
          <div>
            <p className="bj-method-title">{t('buyerJourney.step3.wise.title')}</p>
            <p className="bj-method-desc">{t('buyerJourney.step3.wise.desc')}</p>
          </div>
        </div>
      </div>

      <div className="bj-payment-note">
        <MessageCircle size={18} strokeWidth={3} /> {t('buyerJourney.step3.note')}
      </div>

      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bj-cta-btn bj-cta-green">
        💬 {t('buyerJourney.step3.cta')} →
      </a>
    </div>
  );
}

// ── Access step content ──────────────────────────────────────────────
function AccessStep({ t }) {
  const itemsData = t('buyerJourney.step4.items') || [];
  const icons = ["👤", "🔗", "📺", "🎧"];

  return (
    <div className="bj-access-wrap">
      <div className="bj-success-card">
        <div className="bj-success-check">✓</div>
        <div>
          <p className="bj-success-title">{t('buyerJourney.step4.successTitle')}</p>
          <p className="bj-success-desc">{t('buyerJourney.step4.successDesc')}</p>
        </div>
      </div>

      <p className="bj-access-label">{t('buyerJourney.step4.listLabel')}</p>
      <div className="bj-access-items">
        {itemsData.map((item, i) => (
          <div className="bj-access-item" key={i}>
            <span className="bj-access-icon">{icons[i]}</span>
            <div>
              <p className="bj-access-item-title">{item.title}</p>
              <p className="bj-access-item-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" className="bj-cta-btn">
        {t('buyerJourney.step4.cta')} →
      </a>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────
export default function BuyerJourney() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Define steps icons and keys
  const stepsConfig = [
    { id: "plan", icon: <rect x="2" y="3" width="20" height="14" rx="2"/>, labelKey: "step1", titleKey: "step1", subKey: "step1", content: <PlanStep t={t} /> },
    { id: "contact", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>, labelKey: "step2", titleKey: "step2", subKey: "step2", content: <ContactStep t={t} /> },
    { id: "payment", icon: <rect x="2" y="5" width="20" height="14" rx="2"/>, labelKey: "step3", titleKey: "step3", subKey: "step3", content: <PaymentStep t={t} /> },
    { id: "access", icon: <circle cx="12" cy="12" r="10"/>, labelKey: "step4", titleKey: "step4", subKey: "step4", content: <AccessStep t={t} /> },
  ];

  const goTo = (idx) => {
    if (idx === active || idx < 0 || idx >= stepsConfig.length) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 180);
  };

  const currentStep = stepsConfig[active];

  return (
    <section className="bj-section" id="BuyerJourney">
      <div className="bj-header">
        <p className="bj-tag">{t('buyerJourney.header.tag')}</p>
        <h2 className="bj-title" dangerouslySetInnerHTML={{ __html: t('buyerJourney.header.title') }} />
      </div>

      <div className="bj-panel">
        {/* LEFT nav list */}
        <div className="bj-nav">
          {stepsConfig.map((s, i) => (
            <button
              key={s.id}
              className={`bj-nav-item ${active === i ? "bj-nav-item--active" : ""} ${i < active ? "bj-nav-item--done" : ""}`}
              onClick={() => goTo(i)}
            >
              <div className={`bj-nav-icon-wrap ${active === i ? "bj-nav-icon-wrap--active" : ""} ${i < active ? "bj-nav-icon-wrap--done" : ""}`}>
                {i < active ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{s.icon}</svg>
                )}
              </div>
              <span className="bj-nav-label">{t(`buyerJourney.nav.${s.labelKey}`)}</span>
              {active === i && <div className="bj-nav-bar" />}
            </button>
          ))}
        </div>

        {/* RIGHT card */}
        <div className="bj-card-wrap">
          <div className={`bj-card ${animating ? "bj-card--out" : ""}`}>
            <div className="bj-card-header">
              <div>
                <p className="bj-card-step">
                   {t('buyerJourney.nav.stepCount').replace('{{current}}', active + 1).replace('{{total}}', stepsConfig.length)}
                </p>
                <h3 className="bj-card-title">{t(`buyerJourney.${currentStep.titleKey}.title`)}</h3>
                <p className="bj-card-sub">{t(`buyerJourney.${currentStep.subKey}.subtitle`)}</p>
              </div>
            </div>

            <div className="bj-card-divider" />
            <div className="bj-card-body">{currentStep.content}</div>

            <div className="bj-card-footer">
              <button className="bj-foot-btn" onClick={() => goTo(active - 1)} disabled={active === 0}>
                ← {t('buyerJourney.nav.back')}
              </button>
              <button className="bj-foot-btn bj-foot-btn--next" onClick={() => goTo(active + 1)} disabled={active === stepsConfig.length - 1}>
                {t('buyerJourney.nav.next')} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}