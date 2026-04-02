import "./FooterStyle.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
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
          >
            💬 Contact Us on WhatsApp
          </a>
        </div>

        {/* LINKS */}
        <div className="footer-links">

          <div>
            <h4>Services</h4>
            <ul>
              <li>Live Channels</li>
              <li>Sports Streaming</li>
              <li>Movies & Series</li>
              <li>4K Content</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Status</li>
            </ul>
          </div>

          <div>
            <h4>Devices</h4>
            <ul>
              <li>Smart TV</li>
              <li>Android / iOS</li>
              <li>Fire Stick</li>
              <li>PC & Mac</li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 IPTV Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}