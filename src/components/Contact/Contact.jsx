import React, { useState, useEffect } from 'react';
import { useLang } from '../../context/LanguageContext';
import { Mail, Send, ShieldCheck } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState({ type: '', msgKey: '' });

  // Auto-hide the success/error message after 4 seconds
  useEffect(() => {
    if (status.msgKey) {
      const timer = setTimeout(() => {
        setStatus({ type: '', msgKey: '' });
      }, 4000); 
      return () => clearTimeout(timer); 
    }
  }, [status.msgKey]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');

    if (formData.get('website_hp')) return;

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus({ type: 'success', msgKey: 'contact.status.success' });
        e.target.reset();
      } else {
        setStatus({ type: 'error', msgKey: 'contact.status.error' });
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus({ type: 'error', msgKey: 'contact.status.networkError' });
    }
  };

  return (
    <section id="contact" className="contact-modern">
      <div className="contact-modern-container">
        
        <header className="contact-modern-header">
          <span className="contact-modern-badge">{t('contact.badge')}</span>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </header>

        <div className="contact-modern-card">
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            {/* Honeypot field for spam */}
            <input type="text" name="website_hp" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

            <div className="newsletter-input-group">
              <Mail className="input-icon" size={20} />
              <input 
                type="email" 
                name="email" 
                placeholder={t('contact.placeholder')} 
                required 
              />
              <button type="submit" className="newsletter-btn">
                {t('contact.button')} <Send size={16} />
              </button>
            </div>

            {status.msgKey && (
              <div className={`form-status ${status.type}`}>
                <ShieldCheck size={18} />
                {t(status.msgKey)}
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}