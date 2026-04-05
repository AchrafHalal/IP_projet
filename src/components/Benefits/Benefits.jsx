import React, { useEffect } from "react"; // Added useEffect
import "./Benefits.css";
import { MonitorPlay, Gauge, Layers, MonitorSmartphone, ShieldCheck, LifeBuoy, Check } from "lucide-react";

const benefits = [
  {
    icon: <MonitorPlay size={36} strokeWidth={1.25} />,
    title: "8K Ultra HD Streaming",
    description: "Experience breathtaking clarity. Our platform auto-optimizes your resolution for a vivid, bandwidth-friendly viewing experience.",
  },
  {
    icon: <Gauge size={36} strokeWidth={1.25} />,
    title: "Zero-Buffering Technology",
    description: "Say goodbye to lag. Backed by premium global servers, we guarantee 99.9% uptime even during peak live events.",
  },
  {
    icon: <Layers size={36} strokeWidth={1.25} />,
    title: "Massive Global Library",
    description: "Unlock 15,000+ live channels across 50+ countries, plus dive into a daily-updated VOD library of box office hits and series.",
  },
  {
    icon: <MonitorSmartphone size={36} strokeWidth={1.25} />,
    title: "Watch on Your Terms",
    description: "Sync seamlessly across devices, from your Smart TV to your phone, and never miss a moment with our 14-Day Cloud DVR.",
  },
  {
    icon: <ShieldCheck size={36} strokeWidth={1.25} />,
    title: "Built-In Privacy",
    description: "Stream securely. Our built-in routing prevents ISP speed throttling and effortlessly bypasses restrictive geo-blocks.",
  },
  {
    icon: <LifeBuoy size={36} strokeWidth={1.25} />,
    title: "24/7 Priority Support",
    description: "Skip the automated bots. Get lightning-fast support from real specialists via live chat or WhatsApp.",
  },
];

export default function Benefits() {

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
      {/* Added global reveal classes to the header elements */}
      <div className="section-badge reveal">Why Choose Us</div>
      <h2 className="section-title reveal delay-1">Elevate Your Entertainment.</h2>
      
      <div className="section-subtitle-badges reveal delay-2">
        <span className="subtitle-badge">
          <Check size={16} className="badge-icon" /> All your favorite channels
        </span>
        <span className="subtitle-badge">
          <Check size={16} className="badge-icon" /> One simple subscription
        </span>
      </div>
      
      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div 
            className="benefit-card reveal" 
            key={index}
            // This dynamically delays each card slightly longer than the last one!
            style={{ transitionDelay: `${index * 0.1}s` }} 
          >
            <div className="benefit-icon-circle">{item.icon}</div>
            <h3 className="benefit-title">{item.title}</h3>
            <p className="benefit-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}




