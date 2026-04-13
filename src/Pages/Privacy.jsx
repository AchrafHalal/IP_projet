import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, EyeOff, ArrowLeft } from 'lucide-react';
import './Style.css';

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <article className="legal-page">
      <header className="legal-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={18} /> Back to Home
        </button>
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: April 6, 2026</p>
      </header>

      {/* SEO QUICK SUMMARY - Helps with "Featured Snippets" */}
      <div className="legal-summary">
        <div className="summary-item">
          <EyeOff size={24} className="summary-icon" />
          <div>
            <h4>No-Logs Policy</h4>
            <p>We never track or store your viewing history or channel logs.</p>
          </div>
        </div>
        <div className="summary-item">
          <Lock size={24} className="summary-icon" />
          <div>
            <h4>Secure Encryption</h4>
            <p>All data and payments are protected via 256-bit SSL encryption.</p>
          </div>
        </div>
        <div className="summary-item">
          <ShieldCheck size={24} className="summary-icon" />
          <div>
            <h4>Data Rights</h4>
            <p>You have full control over your data under GDPR compliance.</p>
          </div>
        </div>
      </div>

      <main className="legal-content">
        <section>
          <h2>1. Introduction & Commitment</h2>
          <p>
            At <strong>SvenskStream</strong>, we recognize that privacy is a fundamental right. 
            This policy outlines our transparent approach to data handling. We operate under 
            a strict <strong>No-Logs Policy</strong>, meaning we do not monitor, record, or 
            store any information regarding the content you stream or the channels you access.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>To maintain our service infrastructure and prevent unauthorized access, we collect minimal data:</p>
          <ul>
            <li><strong>Personal Identity:</strong> Name and email address used strictly for account management and support communications.</li>
            <li><strong>Billing Data:</strong> Processed via PCI-DSS compliant gateways. We never store full credit card details on our local servers.</li>
            <li><strong>Technical Metadata:</strong> Device type (e.g., Apple TV, Firestick) and app version to ensure optimal streaming performance.</li>
            <li><strong>Anonymized Analytics:</strong> Truncated IP addresses to determine general regional server routing without identifying individual users.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Data</h2>
          <p>Your information is used exclusively to:</p>
          <ul>
            <li>Validate active subscriptions and prevent account "restreaming" or sharing.</li>
            <li>Optimize global server routing based on regional demand.</li>
            <li>Provide technical support and critical service updates.</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Retention & Security</h2>
          <p>
            We employ industry-leading <strong>AES-256 encryption</strong> for all data at rest. 
            Technical logs related to server performance are automatically purged every 30 days. 
            Account information is retained only for the duration of your active subscription.
          </p>
        </section>

        <section>
          <h2>5. Your Rights (GDPR)</h2>
          <p>
            In accordance with European Data Protection laws, you have the right to request 
            access to your data, request corrections, or ask for the total "right to be forgotten" 
            (data deletion). To exercise these rights, please contact our privacy officer at 
            <a href="mailto:contact@Svensk4kStream.se"> contact@Svensk4kStream.se</a>.
          </p>
        </section>

        <section>
          <h2>6. Third-Party Disclosure</h2>
          <p>
            We <strong>do not sell, trade, or rent</strong> user data to third-party 
            advertising brokers. Data is only shared with essential service providers 
            (like payment processors) necessary to fulfill your subscription.
          </p>
        </section>
      </main>
    </article>
  );
}