import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <button onClick={() => navigate(-1)} className="back-btn">← Back to Home</button>
      <h1>Privacy Policy</h1>
      <p className="last-updated">Effective Date: April 6, 2026</p>

      <section>
        <h3>1. Our Commitment to Privacy</h3>
        <p>At our IPTV Service, we value the trust you place in us. This Privacy Policy describes how we collect, use, and protect your personal information across all platforms, including our web portal and streaming applications. We operate under a strict "No-Logs" philosophy regarding your viewing history.</p>
      </section>

      <section>
        <h3>2. Data Collection & Analytics</h3>
        <p>We collect information necessary to provide a high-quality streaming experience:</p>
        <ul>
          <li><strong>Account Information:</strong> Name, email address, and encrypted credentials.</li>
          <li><strong>Technical Data:</strong> IP address (truncated for anonymity), device type (e.g., MAG, Firestick, iOS), and operating system version to ensure app compatibility.</li>
          <li><strong>Service Logs:</strong> Connection timestamps and bandwidth usage to prevent account sharing and optimize server load.</li>
        </ul>
      </section>

      <section>
        <h3>3. Secure Payment Processing</h3>
        <p>All financial transactions are processed through Tier-1 PCI-DSS compliant payment gateways. We do not store, view, or have access to your full credit card number or bank details. Your billing information is encrypted using 256-bit SSL technology.</p>
      </section>

      <section>
        <h3>4. Cookies and Tracking</h3>
        <p>We use essential cookies to maintain your session and remember your language preferences. We do not use third-party tracking cookies for advertising or sell your data to brokers.</p>
      </section>
    </div>
  );
}