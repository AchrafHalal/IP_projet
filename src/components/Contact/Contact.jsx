import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, ShieldCheck } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState({ type: '', msg: '' });
  const whatsappLink = "https://wa.me/05875114142?text=Support%20Request";

  const handleSecurityCheck = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // 1. HONEYPOT CHECK (Invisible to humans, caught by bots)
    if (data.website_hp) {
      console.warn("Bot detected.");
      return; 
    }

    // 2. JS INJECTION FILTER (XSS Prevention)
    const xssPattern = /<script\b[^>]*>([\s\S]*?)<\/script>|javascript:|on\w+=/gi;
    const isMalicious = Object.values(data).some(val => xssPattern.test(val));

    if (isMalicious) {
      setStatus({ type: 'error', msg: 'Security error: Scripting tags are not allowed.' });
      return;
    }

    // 3. SUCCESS LOGIC (Placeholder for your API call)
    setStatus({ type: 'success', msg: 'Message sent! Our team will contact you soon.' });
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-modern">
      <div className="contact-modern-container">
        
        <header className="contact-modern-header">
          <span className="contact-modern-badge">Support Center</span>
          <h2>Get in Touch</h2>
          <p>Professional support for the Swedish streaming market. We respond within 24 hours.</p>
        </header>

        <div className="contact-modern-card">
          {/* FORM AREA */}
          <form className="contact-modern-form" onSubmit={handleSecurityCheck}>
            
            {/* Honeypot Field (Hidden from users) */}
            <input type="text" name="website_hp" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

            <div className="contact-form-row">
              <div className="form-input-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-input-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="john@example.se" required />
              </div>
            </div>

            <div className="form-input-group">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Technical Support / Billing" required />
            </div>

            <div className="form-input-group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="How can we help you today?" required></textarea>
            </div>

            <button type="submit" className="contact-modern-btn">
              Send Secure Message <Send size={16} />
            </button>

            {status.msg && (
              <div className={`form-status ${status.type}`}>
                {status.type === 'success' ? <ShieldCheck size={18} /> : null}
                {status.msg}
              </div>
            )}
          </form>

          {/* CONTACT INFO BAR */}
          <div className="contact-modern-footer">
            <div className="contact-footer-item">
              <MapPin size={18} />
              <span>Nora, Sweden</span>
            </div>
            <div className="contact-footer-item">
              <Phone size={18} />
              <a href="tel:0587-5114142">0587-5114142</a>
            </div>
            <div className="contact-footer-item">
              <Mail size={18} />
              <a href="mailto:contact@Svensk4kStream.se">Email Support</a>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-whatsapp-link">
              <MessageCircle size={18} /> WhatsApp Support
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}