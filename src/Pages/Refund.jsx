import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RefreshCcw, FileX, CreditCard, ArrowLeft, AlertCircle, ShieldAlert } from 'lucide-react';
import './Style.css';

export default function Refund() {
  const navigate = useNavigate();

  return (
    <article className="legal-page">
      <header className="legal-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={18} /> Back to Home
        </button>
        <h1>Refund & Billing Policy</h1>
        <p className="last-updated">Last Updated: April 12, 2026</p>
      </header>

      {/* SEO QUICK SUMMARY - Designed for 2026 Search Crawlers */}
      <div className="legal-summary">
        <div className="summary-item">
          <FileX size={24} className="summary-icon" />
          <div>
            <h4>Digital Goods</h4>
            <p>Services are deemed "consumed" immediately upon line activation.</p>
          </div>
        </div>
        <div className="summary-item">
          <RefreshCcw size={24} className="summary-icon" />
          <div>
            <h4>72-Hour Rule</h4>
            <p>Refunds only apply if downtime exceeds 72 consecutive hours.</p>
          </div>
        </div>
        <div className="summary-item">
          <CreditCard size={24} className="summary-icon" />
          <div>
            <h4>Contact First</h4>
            <p>Unannounced chargebacks result in permanent IP blacklisting.</p>
          </div>
        </div>
      </div>

      <main className="legal-content">
        <section>
          <h2>1. The Nature of Digital Services</h2>
          <p>
            At <strong>SvenskStream</strong>, we provide digital, non-tangible, 
            irrevocable goods. Because server resources and unique line credentials 
            are allocated specifically to your account the moment a subscription is 
            processed, we maintain a firm stance on refunds to ensure the price 
            stability and quality of our global network.
          </p>
        </section>

        <section>
          <h2>2. Refund Eligibility Criteria</h2>
          <p>
            We value fairness and will issue full or partial refunds <strong>exclusively </strong> 
            under the following verified conditions:
          </p>
          <ul>
            <li><strong>Activation Failure:</strong> If we are unable to provide you with active credentials within 48 hours of payment due to a internal system error.</li>
            <li><strong>Major Service Outage:</strong> If the service is completely inaccessible for more than <strong>72 consecutive hours</strong> due to a failure in our primary server infrastructure.</li>
            <li><strong>Duplicate Transaction:</strong> In cases where our payment processor accidentally charges your account twice for the same plan.</li>
          </ul>
        </section>

        <section>
          <h2>3. Strict Exclusions (Non-Refundable)</h2>
          <p>
            Refunds will <strong>not</strong> be granted for technical issues 
            outside of our direct control, including:
          </p>
          <ul>
            <li><strong>Internet Speed:</strong> Buffering caused by slow local Wi-Fi, 4G/5G instability, or ISP throttling.</li>
            <li><strong>Regional Blocks:</strong> Access issues caused by government censorship or your Internet Service Provider's firewalls.</li>
            <li><strong>Content Variance:</strong> Temporary removal or change of specific channels, movies, or series within a package.</li>
            <li><strong>Device Support:</strong> Purchasing a plan before verifying if your hardware (e.g., older Smart TVs, specific Mag boxes) is compatible.</li>
          </ul>
        </section>

        {/* LEGAL ALERT BOX - Protects your Merchant Account */}
        <section className="legal-alert">
          <div className="alert-content">
            <ShieldAlert size={20} />
            <div>
              <p><strong>Chargeback & Dispute Policy:</strong> Before contacting your bank to open a dispute, you are required to contact our support team. Opening a chargeback without prior consultation is considered "Friendly Fraud" and will result in the immediate and permanent termination of your service and blacklisting of your device/IP from all partner networks.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>4. Subscription Renewals</h2>
          <p>
            All plans are non-recurring unless explicitly stated otherwise. 
            It is your responsibility to manually renew your subscription 
            before the expiration date to avoid service interruption.
          </p>
        </section>

        <section>
          <h2>5. How to Request a Refund</h2>
          <p>
            If you believe you meet the criteria in Section 2, please email 
            <a href="mailto:contact@Svensk4kStream.se"> contact@Svensk4kStream.se </a> 
            with your <strong>Order ID</strong> and a detailed description of the 
            technical error. Our billing department will review your logs and 
            respond within 3 business days.
          </p>
        </section>
      </main>
    </article>
  );
}