import React, { useEffect } from "react";
import { MonitorPlay, Gauge, Layers, MonitorSmartphone, ShieldCheck, LifeBuoy, Check } from "lucide-react";
import { useLang } from '../../context/LanguageContext';
import "./Benefits.css";

// Move icons to an array outside the component
const BENEFIT_ICONS = [
  <MonitorPlay size={36} strokeWidth={1.25} />,
  <Gauge size={36} strokeWidth={1.25} />,
  <Layers size={36} strokeWidth={1.25} />,
  <MonitorSmartphone size={36} strokeWidth={1.25} />,
  <ShieldCheck size={36} strokeWidth={1.25} />,
  <LifeBuoy size={36} strokeWidth={1.25} />
];

export default function Benefits() {
  const { t } = useLang();
  
  // Extracting translations
  const items = t('benefits.items') || [];

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
    <section className="benefits-section">
      <div className="section-badge reveal">{t('benefits.badge')}</div>
      <h2 className="section-title reveal delay-1">{t('benefits.title')}</h2>

      <div className="section-subtitle-badges reveal delay-2">
        <span className="subtitle-badge">
          <Check size={16} className="badge-icon" /> {t('benefits.subtitles.channels')}
        </span>
        <span className="subtitle-badge">
          <Check size={16} className="badge-icon" /> {t('benefits.subtitles.subscription')}
        </span>
      </div>

      <div className="benefits-grid">
        {items.map((item, index) => (
          <div
            className="benefit-card reveal"
            key={index}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="benefit-icon-circle">
              {/* Uses the icon from our constant array based on the index */}
              {BENEFIT_ICONS[index]}
            </div>

            <h3 className="benefit-title">{item.title}</h3>
            <p className="benefit-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}