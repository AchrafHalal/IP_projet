import React, { useState, useMemo } from "react";
import { useLang } from '../../context/LanguageContext';
import { ChevronDown } from "lucide-react"; 
import "./FaqStyle.css";

// ─── ITEM COMPONENT ─────────────────────────────────────────
const FAQItem = ({ item, open, onToggle, catLabel }) => (
  <div className={`faq-item ${open ? "faq-item--open" : ""}`}>
    <button className="faq-question" onClick={onToggle}>
      <div className="faq-q-left">
        <span className="faq-tag">
          {catLabel}
        </span>
        <span className="faq-q-text">
          {item.q}
        </span>
      </div>

      <ChevronDown 
        size={20} 
        strokeWidth={2.5} 
        className={`faq-icon ${open ? "open" : ""}`} 
      />
    </button>

    <div className={`faq-answer ${open ? "open" : ""}`}>
      <div className="faq-answer-content">
        <p>{item.a}</p>
      </div>
    </div>
  </div>
);

// ─── MAIN COMPONENT ─────────────────────────────────────────
export default function FaqPage() {
  const { t } = useLang();
  const [activeCat, setActiveCat] = useState("all");
  const [openId, setOpenId] = useState(null);

  // 1. Get Category Labels (for the tabs and tags)
  const categoryLabels = t('faq.categories') || {};

  // 2. Optimized Filtering logic
  const filtered = useMemo(() => {
    // We pull the raw data inside the memo to fix the ESLint warning
    const rawItems = t('faq.items');
    const faqItems = Array.isArray(rawItems) ? rawItems : [];

    if (activeCat === "all") return faqItems;
    return faqItems.filter((f) => f.cat === activeCat);
  }, [activeCat, t]); // Now depends on activeCat and the translation function

  // 3. Category definitions
  const categories = [
    { id: "all", label: categoryLabels.all },
    { id: "general", label: categoryLabels.general },
    { id: "setup", label: categoryLabels.setup },
    { id: "technical", label: categoryLabels.technical },
    { id: "devices", label: categoryLabels.devices },
    { id: "billing", label: categoryLabels.billing },
  ];

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="FAQ">
      <div className="faq-container">

        {/* HEADER */}
        <div className="faq-header">
          <div className="faq-badge">{t('faq.badge')}</div>
          <h2 className="faq-title">{t('faq.title')}</h2>
          <p className="faq-subtitle">{t('faq.subtitle')}</p>
        </div>

        {/* TABS */}
        <div className="faq-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`faq-tab ${activeCat === cat.id ? "active" : ""}`}
              onClick={() => {
                setActiveCat(cat.id);
                setOpenId(null);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* LIST */}
        <div className="faq-list">
          {filtered.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              catLabel={categoryLabels[item.cat]} 
              open={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}