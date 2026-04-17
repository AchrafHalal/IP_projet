import React, { useState, useEffect } from 'react';
import { Mail, Send, ShieldCheck } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState({ type: '', msg: '' });

  // Auto-hide the success/error message after 4 seconds
  useEffect(() => {
    if (status.msg) {
      const timer = setTimeout(() => {
        setStatus({ type: '', msg: '' });
      }, 4000); 
      return () => clearTimeout(timer); 
    }
  }, [status.msg]);

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
        setStatus({ type: 'success', msg: 'Successfully subscribed to updates!' });
        e.target.reset();
      } else {
        setStatus({ type: 'error', msg: 'Failed to subscribe. Please try again.' });
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus({ type: 'error', msg: 'Network error. Make sure your backend is running.' });
    }
  };

  return (
    <section id="contact" className="contact-modern">
      <div className="contact-modern-container">
        
        <header className="contact-modern-header">
          {/* Updated badge and text */}
          <span className="contact-modern-badge">Newsletter</span>
          <h2>Stay in the Loop</h2>
          <p>Join our newsletter for the latest channel updates and Swedish market offers.</p>
        </header>

        <div className="contact-modern-card">
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input type="text" name="website_hp" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

            <div className="newsletter-input-group">
              <Mail className="input-icon" size={20} />
              <input type="email" name="email" placeholder="Enter your email address..." required />
              <button type="submit" className="newsletter-btn">
                Subscribe <Send size={16} />
              </button>
            </div>

            {status.msg && (
              <div className={`form-status ${status.type}`}>
                <ShieldCheck size={18} />
                {status.msg}
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}