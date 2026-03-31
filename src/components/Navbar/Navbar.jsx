import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-outer">
      <div className="navbar-scale">
        <nav className="navbar-container">
          <div className="navbar-content">

            {/* 1. Logo Section */}
            <div className="navbar-logo">
              <a href="/">LOGO</a>
            </div>

            {/* 2. Middle Links */}
            <ul className="navbar-links">
              <li><a href="#features">Section1</a></li>
              <li><a href="#pricing">Section2</a></li>
              <li><a href="#about">Section3</a></li>
            </ul>

            {/* 3. Call to Action Button */}
            <div className="navbar-cta">
              <button className="btn-primary">Get Started</button>
            </div>

          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;