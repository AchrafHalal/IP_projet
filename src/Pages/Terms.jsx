import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Gavel, MonitorOff, Zap, ArrowLeft, AlertTriangle, Globe } from 'lucide-react';
import './Style.css';

export default function Terms() {
  const navigate = useNavigate();

  return (
    <article className="legal-page">
      <header className="legal-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={18} /> Back to Home
        </button>
        <h1>Terms of Service</h1>
        <p className="last-updated">Effective Date: April 12, 2026</p>
      </header>

      {/* SEO QUICK SUMMARY - Designed for Google Featured Snippets */}
      <div className="legal-summary">
        <div className="summary-item">
          <Zap size={24} className="summary-icon" />
          <div>
            <h4>Fair Usage</h4>
            <p>Connections are limited to your specific plan (usually 1 device).</p>
          </div>
        </div>
        <div className="summary-item">
          <MonitorOff size={24} className="summary-icon" />
          <div>
            <h4>No Re-streaming</h4>
            <p>Recording or redistributing our content is strictly prohibited.</p>
          </div>
        </div>
        <div className="summary-item">
          <Globe size={24} className="summary-icon" />
          <div>
            <h4>ISP & Regions</h4>
            <p>You are responsible for your own internet speed and regional ISP blocks.</p>
          </div>
        </div>
      </div>

      <main className="legal-content">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing the <strong>SvenskStream</strong> platform or purchasing any subscription, 
            you agree to be bound by these Terms of Service. This is a legally binding contract. 
            If you do not agree with these terms, you must immediately stop using our services 
            and cancel any active subscriptions.
          </p>
        </section>

        <section>
          <h2>2. Service License & Restrictions</h2>
          <p>
            We grant you a personal, non-exclusive, and non-transferable license to access 
            streaming content for <strong>private, non-commercial use</strong>. To protect our 
            network and providers, you agree NOT to:
          </p>
          <ul>
            <li><strong>Re-stream or Redistribute:</strong> Capturing, recording, or rebroadcasting our streams via any medium.</li>
            <li><strong>Account Sharing:</strong> Sharing your unique credentials with any person outside your household.</li>
            <li><strong>Data Mining:</strong> Using scrapers, bots, or automated scripts to extract channel lists or metadata.</li>
          </ul>
        </section>

        <section>
          <h2>3. Connection Limits & Device Policy</h2>
          <p>
            Your access is bound by the "Allowed Connections" defined in your plan. 
            Our system monitors <strong>simultaneous IP access</strong>. If a breach is 
            detected (e.g., two different locations using the same account at once), 
            the system will automatically trigger a 24-hour security suspension. 
            Repeated violations will result in a permanent ban without refund.
          </p>
        </section>

        <section>
          <h2>4. Technical Disclaimer & Requirements</h2>
          <p>
            To enjoy 4K/UHD quality, a stable internet connection of at least <strong>25Mbps</strong> 
            is required. While we maintain 99.9% server uptime, we are not responsible for:
          </p>
          <ul>
            <li>Regional ISP throttling or government-mandated blocks.</li>
            <li>Hardware incompatibility on older devices (MAG, legacy Android boxes).</li>
            <li>Third-party content changes (Channels being added or removed by broadcasters).</li>
          </ul>
        </section>

        <section className="legal-alert">
          <div className="alert-content">
            <AlertTriangle size={20} />
            <div>
              <p><strong>Important Disclaimer:</strong> We act as a technical service provider and intermediary. We do not own or host the broadcast content. All liability regarding content legality remains with the original third-party broadcasters.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>5. Payments & Cancellations</h2>
          <p>
            All subscriptions are prepaid. Once a service is activated and your line is 
            generated, the service is deemed "consumed." Please refer to our 
            <Link to="/refund" style={{color: '#3b82f6', fontWeight: '600'}}> Refund Policy </Link> 
            for specific conditions regarding technical failures.
          </p>
        </section>

        <section>
          <h2>6. Modifications to Service</h2>
          <p>
            We reserve the right to modify or discontinue parts of the service or these 
            terms at any time to reflect changes in technology or law. Continued use 
            of the service after such changes constitutes acceptance of the new terms.
          </p>
        </section>
      </main>
    </article>
  );
}