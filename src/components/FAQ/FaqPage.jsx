import { useState, useMemo } from "react";
import "./FaqStyle.css";

// ─── DATA ─────────────────────────────────────────
const FAQ_ITEMS = [
  {
    id: 1,
    cat: "general",
    q: "What is IPTV and how does it work?",
    a: "IPTV delivers TV channels and video content over your internet connection instead of cable or satellite.",
  },
  {
    id: 2,
    cat: "general",
    q: "How many channels do I get?",
    a: "You get access to thousands of live channels, movies, and series.",
  },
  {
    id: 3,
    cat: "setup",
    q: "How do I activate my subscription?",
    a: "You will receive your credentials by email and can start immediately.",
  },
  {
    id: 4,
    cat: "technical",
    q: "Why is my stream buffering?",
    a: "Usually due to slow internet. Minimum 25 Mbps recommended.",
  },
  {
    id: 5,
    cat: "devices",
    q: "What devices are supported?",
    a: "Smart TVs, phones, tablets, PC, and streaming devices.",
  },
  {
    id: 6,
    cat: "billing",
    q: "Can I get a refund?",
    a: "Yes, we offer a 7-day money-back guarantee.",
  },
];

// ─── CATEGORIES ───────────────────────────────────
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "setup", label: "Setup" },
  { id: "technical", label: "Technical" },
  { id: "devices", label: "Devices" },
  { id: "billing", label: "Billing" },
];

// ─── ICON ─────────────────────────────────────────
const PlusIcon = ({ open }) => (
  <span className={`faq-icon ${open ? "open" : ""}`}>
    +
  </span>
);

// ─── ITEM ─────────────────────────────────────────
const FAQItem = ({ item, open, onToggle }) => (
  <div className="faq-item">
    <button className="faq-question" onClick={onToggle}>
      <div className="faq-q-left">
        <span className={`faq-tag faq-${item.cat}`}>
          {item.cat}
        </span>
        <span className={`faq-q-text ${open ? "active" : ""}`}>
          {item.q}
        </span>
      </div>

      <PlusIcon open={open} />
    </button>

    <div className={`faq-answer ${open ? "open" : ""}`}>
      <div className="faq-answer-content">
        <p>{item.a}</p>
      </div>
    </div>
  </div>
);

// ─── MAIN ─────────────────────────────────────────
export default function FaqPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    if (activeCat === "all") return FAQ_ITEMS;
    return FAQ_ITEMS.filter((f) => f.cat === activeCat);
  }, [activeCat]);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="FAQ">
      <div className="faq-container">

        {/* HEADER */}
        <div className="faq-header">
          <span className="faq-eyebrow">Support</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about our IPTV service.
          </p>
        </div>

        {/* TABS */}
        <div className="faq-tabs">
          {CATEGORIES.map((cat) => (
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
              open={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>

        {/* FOOTER */}
        <div className="faq-footer">
            <p className="faq-footer-text">
                Still have questions? We're here to help you 24/7.
            </p>

            <a
                href="https://wa.me/212XXXXXXXXX"
                rel="noopener noreferrer"
                className="faq-btn-whatsapp"
            >
                💬 Contact Us on WhatsApp
            </a>
        </div>

      </div>
    </section>
  );
}