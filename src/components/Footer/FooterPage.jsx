import { MessageCircle } from "lucide-react";
import "./FooterStyle.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: Brand & CTA */}
        <div className="footer-brand">
          <h3 className="footer-logo">IPTV Pro</h3>
          <p className="footer-desc">
            Watch thousands of live channels, movies, and series anytime,
            anywhere. High quality streaming with zero interruptions.
          </p>

          <a
            href="https://wa.me/212XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
            aria-label="Contact Support on WhatsApp"
          >
            <MessageCircle size={18} strokeWidth={2.5} /> Contact Us on WhatsApp
          </a>
        </div>

        {/* RIGHT: Navigation Links (SEO Optimized) */}
        <div className="footer-links">

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#channels">Live Channels</a></li>
              <li><a href="#sports">Sports Streaming</a></li>
              <li><a href="#movies">Movies & Series</a></li>
              <li><a href="#4k">4K Content</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#FAQ">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#status">Status</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Devices</h4>
            <ul>
              <li><a href="#smart-tv">Smart TV</a></li>
              <li><a href="#mobile">Android / iOS</a></li>
              <li><a href="#firestick">Fire Stick</a></li>
              <li><a href="#pc">PC & Mac</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#refunds">Refund Policy</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM: Copyright */}
      <div className="footer-bottom">
        <p>© {currentYear} IPTV Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}