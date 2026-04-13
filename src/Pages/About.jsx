import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Globe, Zap, Heart, CheckCircle } from 'lucide-react';
import './Style.css';

export default function About() {
  const navigate = useNavigate();

  return (
    <article className="legal-page">
      <header className="legal-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={18} /> Back to Home
        </button>
        <h1>About SvenskStream</h1>
        <p className="last-updated">Sweden's Leading 4K Streaming Infrastructure</p>
      </header>

      {/* Trust Grid: High-Value SEO Signals */}
      <div className="legal-summary">
        <div className="summary-item">
          <Zap size={24} className="summary-icon" />
          <div>
            <h4>Anti-Freeze 10.0</h4>
            <p>Our proprietary routing ensures 99.9% buffer-free playback even on peak match days.</p>
          </div>
        </div>
        <div className="summary-item">
          <Globe size={24} className="summary-icon" />
          <div>
            <h4>Local Swedish Nodes</h4>
            <p>Dedicated servers located in Stockholm and Malmö for the lowest possible latency.</p>
          </div>
        </div>
        <div className="summary-item">
          <ShieldCheck size={24} className="summary-icon" />
          <div>
            <h4>Verified Security</h4>
            <p>Fully encrypted streams and PCI-DSS compliant payment processing for total peace of mind.</p>
          </div>
        </div>
      </div>

      <main className="legal-content">
        <section>
          <h2>1. Our Vision: The Future of Nordic IPTV</h2>
          <p>
            Founded in 2024, <strong>SvenskStream</strong> was born out of a simple frustration: the lack of true 4K quality in the Swedish streaming market. While others compress their signals to save costs, we built a premium infrastructure designed for the modern home cinema. 
          </p>
          <p>
            We don't just provide links; we provide a high-bitrate gateway to global entertainment, specifically optimized for <strong>Nordic ISPs</strong> like Telia, Tele2, and Telenor.
          </p>
        </section>

        <section>
          <h2>2. Why We Are Different</h2>
          <p>
            The digital landscape is crowded, but SvenskStream stands apart through technical transparency. Our service is built on three pillars of excellence:
          </p>
          <ul className="about-benefits-list">
            <li>
              <CheckCircle size={16} color="#3b82f6" />
              <span><strong>Pure 4K Bitrates:</strong> We deliver streams at their original broadcast quality, ensuring every blade of grass on the pitch is visible.</span>
            </li>
            <li>
              <CheckCircle size={16} color="#3b82f6" />
              <span><strong>Instant Activation:</strong> Our automated billing system generates your unique credentials the moment payment is confirmed.</span>
            </li>
            <li>
              <CheckCircle size={16} color="#3b82f6" />
              <span><strong>Hardware Agnostic:</strong> Whether you use a MAG box, Firestick, Apple TV, or Smart TV, our middleware ensures a native app experience.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Next-Gen Server Infrastructure</h2>
          <p>
            To maintain our status as the <strong>best IPTV service in Sweden</strong>, we utilize a Private Content Delivery Network (CDN). By bypassing congested public hops, we reduce "channel zap" time to under 0.5 seconds. Our load-balancing technology automatically shifts your connection to the fastest available node, preventing the blackouts common during major sporting events like the Champions League or Allsvenskan.
          </p>
        </section>

        <section className="legal-alert">
          <div className="alert-content">
            <Heart size={20} />
            <div>
              <p><strong>A Human Approach:</strong> We aren't just a faceless platform. Our support team is comprised of tech enthusiasts based in Sweden who actually use the service. When you talk to us, you're talking to an expert, not a bot.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>4. Content Without Compromise</h2>
          <p>
            With access to over 15,000 channels and an ever-growing library of VOD (Video on Demand), we offer more than just television. We offer a curated experience. From local Swedish news to international PPV events, every stream is monitored 24/7 by our technical operations center to ensure maximum uptime.
          </p>
        </section>

        <section>
        <h2>5. Our Promise to You</h2>
        <p>
            We believe in our product. That is why we offer transparent{' '}
        <Link to="/Refund" style={{ color: '#3b82f6', fontWeight: '600' }}>
            <strong>Refund Policies</strong>
        </Link>{' '}
            and clear{' '}
        <Link to="/Terms" style={{ color: '#3b82f6', fontWeight: '600' }}>
            <strong>Terms of Service</strong>
        </Link>. 
            We are here for the long term, committed to bringing the best possible streaming technology to your living room.
        </p>
        </section>
      </main>
    </article>
  );
}