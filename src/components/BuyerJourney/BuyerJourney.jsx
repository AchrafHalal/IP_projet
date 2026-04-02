import { useState } from "react";
import "./BuyerJourney.css";
import { MessageCircle, CreditCard, Landmark } from 'lucide-react';

// ── Step definitions ────────────────────────────────────────────────
const steps = [
  {
    id: "plan",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    label: "Choose Your Plan",
    title: "Pick the Plan That Fits You",
    subtitle: "Flexible subscriptions — no contracts, cancel anytime.",
    content: <PlanStep />,
  },
  {
    id: "contact",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    label: "Chat With Us",
    title: "Confirm on WhatsApp",
    subtitle: "Send us your chosen plan and we'll set everything up for you.",
    content: <ContactStep />,
  },
  {
    id: "payment",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
      </svg>
    ),
    label: "Secure Payment",
    title: "Complete Your Payment",
    subtitle: "Pay securely via bank transfer, cash, or online. Instant confirmation.",
    content: <PaymentStep />,
  },
  {
    id: "access",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    label: "Account Setup",
    title: "Get Instant Access",
    subtitle: "Receive your credentials within 15 minutes and start streaming.",
    content: <AccessStep />,
  },
];

// ── Plan step content ────────────────────────────────────────────────
function PlanStep() {
  const [selected, setSelected] = useState(1);
  const plans = [
    { id: 0, name: "1 Month",  price: "10$",  badge: null,       connections: 1, devices: "All devices" },
    { id: 1, name: "3 Months", price: "25$",  badge: "Popular",  connections: 2, devices: "All devices" },
    { id: 2, name: "6 Months", price: "45$",  badge: null,       connections: 2, devices: "All devices" },
    { id: 3, name: "1 Year",   price: "70$",  badge: "Best Deal",connections: 3, devices: "All devices" },
  ];
  return (
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
          <div className="bj-plan-detail">{p.connections} connection{p.connections > 1 ? "s" : ""}</div>
          <div className="bj-plan-detail">{p.devices}</div>
        </button>
      ))}
      <a
        href="https://wa.me/YOUR_NUMBER?text=I want to subscribe"
        target="_blank"
        rel="noopener noreferrer"
        className="bj-cta-btn"
      >
        Continue with Selected Plan →
      </a>
    </div>
  );
}

// ── Contact step content ─────────────────────────────────────────────
function ContactStep() {
  return (
    <div className="bj-contact-wrap">
      <div className="bj-contact-card">
        <div className="bj-contact-icon">💬</div>
        <div>
          <p className="bj-contact-title">Message us on WhatsApp</p>
          <p className="bj-contact-desc">
            Tell us which plan you chose. We'll confirm availability and guide you through the next steps in minutes.
          </p>
        </div>
      </div>

      <div className="bj-info-rows">
        <div className="bj-info-row">
          <span className="bj-info-icon">⚡</span>
          <span>We typically reply within <strong>5 minutes</strong></span>
        </div>
        <div className="bj-info-row">
          <span className="bj-info-icon">🌍</span>
          <span>Available <strong>7 days a week</strong>, Arabic & French support</span>
        </div>
        <div className="bj-info-row">
          <span className="bj-info-icon">🔒</span>
          <span>Your information stays <strong>100% private</strong></span>
        </div>
      </div>

      <a
        href="https://wa.me/YOUR_NUMBER?text=Hi, I want to subscribe to your IPTV service"
        target="_blank"
        rel="noopener noreferrer"
        className="bj-cta-btn bj-cta-green"
      >
        <span style={{ fontSize: "18px" }}>💬</span>
        Open WhatsApp Chat →
      </a>
    </div>
  );
}

// ── Payment step content ─────────────────────────────────────────────
function PaymentStep() {
  // Replace these with your actual links
  const STRIPE_LINK = "https://buy.stripe.com/example";
  const WISE_LINK = "https://wise.com/pay/me/yourlink";
  const WHATSAPP_LINK = "https://wa.me/YOUR_NUMBER?text=I want to pay for my IPTV subscription";

  return (
    <div className="bj-payment-wrap">
      <div className="bj-payment-header">
        <span className="bj-payment-label">Choose your method</span>
        <div className="bj-payment-badges">
          <span className="bj-pay-badge">💳 Card</span>
          <span className="bj-pay-badge">🏦 Bank</span>
        </div>
      </div>

      <div className="bj-payment-methods">
        {/* Stripe / Credit Card Link */}
        <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <div className="bj-method-card" style={{ cursor: 'pointer', transition: 'border 0.2s' }}>
            <div className="bj-method-icon">
              {/* Black Credit Card Vector */}
              <CreditCard size={22} color="#000000" strokeWidth={2.5} />
            </div>
            <div>
              <p className="bj-method-title">Credit / Debit Card</p>
              <p className="bj-method-desc">Pay securely via Stripe link. All cards accepted.</p>
            </div>
          </div>
        </a>

        {/* Wise / International Transfer */}
        <a href={WISE_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <div className="bj-method-card" style={{ cursor: 'pointer' }}>
            <div className="bj-method-icon">
              {/* Landmark/Bank Vector for Wise/Transfer */}
              <Landmark size={22} color="#001A46" strokeWidth={2.5} />
            </div>
            <div>
              <p className="bj-method-title">Wise Transfer</p>
              <p className="bj-method-desc">Fast international transfer with low fees. Best for EU/US.</p>
            </div>
          </div>
        </a>


      </div>

      <div className="bj-payment-note">
        <MessageCircle size={18} strokeWidth={3} /> After paying via Stripe or Wise, please take a screenshot and send it to us via WhatsApp for instant activation.
      </div>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bj-cta-btn bj-cta-green"
      >
        💬 Chat with us to Confirm →
      </a>
    </div>
  );
}

// ── Access step content ──────────────────────────────────────────────
function AccessStep() {
  return (
    <div className="bj-access-wrap">
      {/* Success card */}
      <div className="bj-success-card">
        <div className="bj-success-check">✓</div>
        <div>
          <p className="bj-success-title">Subscription Activated!</p>
          <p className="bj-success-desc">Your credentials will be sent to your WhatsApp within 15 minutes.</p>
        </div>
      </div>

      {/* What you receive */}
      <p className="bj-access-label">What you'll receive</p>
      <div className="bj-access-items">
        {[
          { icon: "👤", title: "Username & Password", desc: "Login credentials for all your devices" },
          { icon: "🔗", title: "Server URL / M3U Link", desc: "Your personal streaming link" },
          { icon: "📺", title: "Setup Guide", desc: "Step-by-step instructions for your device" },
          { icon: "🎧", title: "24/7 Support", desc: "We're here if you need any help" },
        ].map((item, i) => (
          <div className="bj-access-item" key={i}>
            <span className="bj-access-icon">{item.icon}</span>
            <div>
              <p className="bj-access-item-title">{item.title}</p>
              <p className="bj-access-item-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/YOUR_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="bj-cta-btn"
      >
        Contact Support →
      </a>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────
export default function BuyerJourney() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx) => {
    if (idx === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 180);
  };

  const step = steps[active];

  return (
    <section className="bj-section" id="BuyerJourney">
      <div className="bj-header">
        <p className="bj-tag">YOUR JOURNEY</p>
        <h2 className="bj-title">From browsing to streaming<br />in 4 simple steps.</h2>
      </div>

      <div className="bj-panel">

        {/* LEFT nav list */}
        <div className="bj-nav">
          {steps.map((s, i) => (
            <button
              key={s.id}
              className={`bj-nav-item ${active === i ? "bj-nav-item--active" : ""} ${i < active ? "bj-nav-item--done" : ""}`}
              onClick={() => goTo(i)}
            >
              <div className={`bj-nav-icon-wrap ${active === i ? "bj-nav-icon-wrap--active" : ""} ${i < active ? "bj-nav-icon-wrap--done" : ""}`}>
                {i < active ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : s.icon}
              </div>
              <span className="bj-nav-label">{s.label}</span>
              {active === i && <div className="bj-nav-bar" />}
            </button>
          ))}
        </div>

        {/* RIGHT card */}
        <div className="bj-card-wrap">
          <div className={`bj-card ${animating ? "bj-card--out" : ""}`}>

            {/* Card header */}
            <div className="bj-card-header">
              <div>
                <p className="bj-card-step">Step {active + 1} of {steps.length}</p>
                <h3 className="bj-card-title">{step.title}</h3>
                <p className="bj-card-sub">{step.subtitle}</p>
              </div>
              {/* Progress dots */}
              <div className="bj-progress-dots">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className="bj-progress-dot"
                    style={{
                      background: i === active ? "#001A46" : i < active ? "#001A4666" : "#e2e8f0",
                      width: i === active ? "24px" : "8px",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="bj-card-divider" />

            {/* Step content */}
            <div className="bj-card-body">
              {step.content}
            </div>

            {/* Bottom nav */}
            <div className="bj-card-footer">
              <button
                className="bj-foot-btn"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
              >
                ← Back
              </button>
              <button
                className="bj-foot-btn bj-foot-btn--next"
                onClick={() => goTo(active + 1)}
                disabled={active === steps.length - 1}
              >
                Next step →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}