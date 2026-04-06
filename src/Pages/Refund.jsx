import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';


export default function Refund() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      <h1>Refund & Billing Policy</h1>

      <section>
        <h3>1. Subscription Philosophy</h3>
        <p>Digital IPTV services are non-tangible, irrevocable goods. Because our servers allocate resources immediately upon account activation, we maintain a strict refund policy to ensure the stability of our service for all users.</p>
      </section>

      <section>
        <h3>2. Refund Eligibility</h3>
        <p>Refunds are only issued under the following specific conditions:</p>
        <ul>
          <li>The account was never activated due to a technical error on our side.</li>
          <li>Service downtime exceeds 72 consecutive hours (3 full days) due to our server failure.</li>
          <li>Duplicate billing caused by a system error.</li>
        </ul>
      </section>

      <section>
        <h3>3. Non-Refundable Scenarios</h3>
        <p>We do NOT provide refunds for:</p>
        <ul>
          <li>Slow internet speeds or ISP buffering/throttling.</li>
          <li>Channel changes or temporary removal of specific content.</li>
          <li>The user "changing their mind" after using the service.</li>
          <li>Device incompatibility (it is the user's responsibility to verify hardware support before purchase).</li>
        </ul>
      </section>

      <section>
        <h3>4. Dispute Resolution</h3>
        <p>Before opening a dispute with your bank, we ask that you contact our 24/7 technical support. Opening a chargeback without contacting us first will result in an immediate and permanent blacklist of your IP address and device from our network.</p>
      </section>
    </div>
  );
}