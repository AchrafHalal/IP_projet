import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';


export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      <h1>Terms and Conditions</h1>

      <section>
        <h3>1. Acceptance of Agreement</h3>
        <p>By accessing our platform or purchasing a subscription, you enter into a legally binding agreement. If you do not agree with any part of these terms, you must cease use of our services immediately.</p>
      </section>

      <section>
        <h3>2. Account Usage & Restrictions</h3>
        <p>You are granted a limited, non-exclusive license to view content. You strictly agree NOT to:</p>
        <ul>
          <li>Record, re-stream, or redistribute any content provided by our service.</li>
          <li>Share your login credentials with third parties.</li>
          <li>Use automated tools or scripts to "scrape" our channel list.</li>
        </ul>
      </section>

      <section>
        <h3>3. Connection Limits</h3>
        <p>Subscription plans are bound to the number of "Allowed Connections" purchased (typically 1). If our system detects simultaneous connections from different IP addresses exceeding your limit, your account will be automatically suspended for 24 hours.</p>
      </section>

      <section>
        <h3>4. Disclaimer of Content</h3>
        <p>We act as a technical intermediary. We do not own the channels or content provided. We are not responsible for the accuracy, legality, or copyright compliance of the streams provided by third-party broadcasters.</p>
      </section>

      <section>
        <h3>5. Technical Requirements</h3>
        <p>A stable internet connection of at least 25Mbps is required for 4K/UHD content. We are not responsible for regional blocks imposed by your government or ISP (Internet Service Provider).</p>
      </section>
    </div>
  );
}