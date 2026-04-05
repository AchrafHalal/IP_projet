import React, { useEffect } from "react";
import "./Pricing.css";
import { Check, CreditCard, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function Pricing() {
  const featuresList = [
    "8K & 4K Ultra HD Streaming",
    "15,000+ Global Channels",
    "Zero-Buffering Technology",
    "14-Day Cloud DVR",
    "Multi-Device Syncing",
    "24/7 Priority Support",
    "Built-in Anti-Throttling",
  ];

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
        <div className="section-badge reveal">Simple Pricing</div>
        <h2 className="section-title reveal delay-1">Choose Your Entertainment Plan</h2>
        <p className="section-subtitle reveal delay-2">
          Unlock unlimited broadcast-quality streaming. No hidden fees, cancel anytime.
        </p>
        
        {/* NEW: Micro Social Proof */}
        <div className="social-proof reveal delay-3">
          <div className="stars">
            <Star size={16} color="#facc15" fill="#facc15" />
            <Star size={16} color="#facc15" fill="#facc15" />
            <Star size={16} color="#facc15" fill="#facc15" />
            <Star size={16} color="#facc15" fill="#facc15" />
            <Star size={16} color="#facc15" fill="#facc15" />
          </div>
          <span>Trusted by <strong>1,000+</strong> happy Subscribers</span>
        </div>
      </div>

      {/* The VIP Ticket Banner (1-Month Special Offer) */}
      <div className="vip-ticket-container reveal delay-4">
        <div className="vip-ticket">
          <div className="ticket-content">
            <h3>
              <Sparkles size={24} color="#facc15" fill="#facc15" className="ticket-icon" /> 
              1-Month Starter Pass
            </h3>
            <p>Test our premium servers with a full month of unrestricted access.</p>
          </div>
          <a 
            href="https://wa.me/YOUR_NUMBER_HERE?text=Hi!%20I%20would%20like%20to%20get%20the%201-Month%20Starter%20Pass%20for%20$14." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ticket-btn"
          >
            Unlock for $14
          </a>
        </div>
      </div>

      {/* The Pricing Cards Grid */}
      <div className="pricing-grid">
        {/* Card 1: 6 Months (Left) - Cascades First */}
        <div className="pricing-card reveal delay-1">
          <div className="card-header">
            <h4 className="plan-name">6-Month Access</h4>
            <div className="plan-price">
              <span className="currency">$</span>69
            </div>
            <div className="price-breakdown">
              <span className="monthly-equivalent">Only <strong>$11.50</strong>/mo</span>
              <span className="payment-type">✔ One-time payment</span>
            </div>
            <p className="plan-desc">Great for casual viewers looking to save.</p>
          </div>
          <ul className="feature-list">
            {featuresList.map((feature, i) => (
              <li key={i}>
                <Check size={18} className="check-icon" /> {feature}
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/YOUR_NUMBER_HERE?text=Hi!%20I%20would%20like%20to%20get%20the%206-Month%20Access%20plan%20for%20$69." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="plan-btn outline-btn"
          >
            Choose Plan
          </a>
        </div>

        {/* Card 2: 3 Months (Highlighted Middle) - Cascades Second */}
        <div className="pricing-card highlighted reveal delay-2">
          <div className="popular-badge">Most Popular</div>
          <div className="card-header">
            <h4 className="plan-name">3-Month Pro</h4>
            <div className="plan-price">
              <span className="currency">$</span>29
            </div>
            <div className="price-breakdown">
              <span className="monthly-equivalent">Only <strong>$9.66</strong>/mo</span>
              <span className="payment-type">✔ Zero contracts</span>
            </div>
            <p className="plan-desc">The perfect sweet spot. Commit less, stream more.</p>
          </div>
          <ul className="feature-list">
            {featuresList.map((feature, i) => (
              <li key={i}>
                <Check size={18} className="check-icon" /> {feature}
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/YOUR_NUMBER_HERE?text=Hi!%20I%20would%20like%20to%20get%20the%203-Month%20Pro%20plan%20for%20$29." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="plan-btn solid-btn"
          >
            Get Started Now
          </a>
        </div>

        {/* Card 3: 12 Months (Right) - Cascades Third */}
        <div className="pricing-card reveal delay-3">
          <div className="card-header">
            <h4 className="plan-name">12-Month Premium</h4>
            <div className="plan-price">
              <span className="currency">$</span>89
            </div>
            <div className="price-breakdown">
              <span className="monthly-equivalent">Only <strong>$7.41</strong>/mo</span>
              <span className="payment-type">✔ Massive savings</span>
            </div>
            <p className="plan-desc">The ultimate cord-cutter package. Best overall value.</p>
          </div>
          <ul className="feature-list">
            {featuresList.map((feature, i) => (
              <li key={i}>
                <Check size={18} className="check-icon" /> {feature}
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/YOUR_NUMBER_HERE?text=Hi!%20I%20would%20like%20to%20get%20the%2012-Month%20Premium%20plan%20for%20$89." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="plan-btn outline-btn"
          >
            Choose Plan
          </a>
        </div>
      </div>

      {/* Shared Features Block (Pill Design) */}
      <div className="shared-features-container reveal">
        <p className="shared-features-title">Every plan includes full access to:</p>
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
          <h4>7-Day Money-Back Guarantee</h4>
          <p>If you experience any buffering or aren't completely satisfied with the channel lineup, we'll refund your payment in full. No questions asked.</p>
        </div>
      </div>

      {/* Secure Checkout Footer */}
      <div className="secure-checkout reveal delay-2">
        <span className="checkout-text">SECURE CHECKOUT</span>
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