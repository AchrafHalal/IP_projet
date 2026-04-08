import { useState, useRef } from 'react';
import { FaWhatsapp, FaStar, FaCheckCircle } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Tracks the mouse position inside the hero section
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const whatsappLink = "https://wa.me/YOUR_NUMBER_HERE?text=Hi!%20I%20would%20like%20to%20get%20the%201-Month%20Starter%20Pass%20for%20$14.";

  return (
    <section 
      className="hero-clean" 
      id="Hero" 
      ref={heroRef} 
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': `${mousePos.x}px`, '--mouse-y': `${mousePos.y}px` }}
    >
      {/* BACKGROUND LAYERS */}
      <div className="dot-grid-base"></div>
      <div className="dot-grid-highlight"></div>

      {/* CONTENT LAYER */}
      <div className="hero-content-wrapper">
        
        {/* CENTERED FUNNEL */}
        <div className="hero-text-side">
          
          <div className="trust-indicator">
            <div className="avatar-group">
              <div className="avatar avatar-1">H</div>
              <div className="avatar avatar-2">M</div>
              <div className="avatar avatar-3">Z</div>
              <div className="avatar avatar-4">T</div>
            </div>
            <div className="trust-text-container">
                <span><strong>1,000+</strong> Active Subscribers</span>
                <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            </div>
          </div>

          <h1 className="hero-headline">
            Premium IPTV <br />
            <span className="accent-text">Subscriptions.</span>
          </h1>
          
          <p className="hero-subhead">
            Enjoy Sports, Movies & Live TV in 4K — Anytime, Anywhere
          </p>

          <div className="hero-ctas">
            {/* Primary: The Low-Risk Hook */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-massive">
              <FaWhatsapp className="icon-large" /> Claim 1-Month Pass via WhatsApp
            </a>
            
            {/* Secondary: The Logical Next Step */}
            <a href="#Pricing" className="btn-secondary-ghost">
              View All Plans
            </a>
          </div>

          <div className="hero-guarantees">
            <div className="guarantee-item">
              <FaCheckCircle className="guarantee-icon"/>
              <span className="guarantee-title">Breathtaking 4K Visuals</span>
            </div>
            <div className="guarantee-item">
              <FaCheckCircle className="guarantee-icon"/>
              <span className="guarantee-title">Lag-Free Performance</span>
            </div>
            <div className="guarantee-item">
              <FaCheckCircle className="guarantee-icon"/>
              <span className="guarantee-title">24/7 Expert Support</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;