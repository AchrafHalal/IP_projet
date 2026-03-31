import React from 'react';
import HeroCards from './HeroCards/HeroCards'; 
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* LEFT: text and CTA */}
        <div className="hero-left">
          <h1 className="hero-title">Movies. Series. Sports. All Yours.</h1>

          <p className="hero-subtitle">
            Discover trending titles and personalized
            <br />
            recommendations instantly.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Start 1-Month Trial (10$)</button>
            <button className="btn-secondary">
              <span className="btn-play-icon">▶</span>
              <span className="btn-play-icon-text">Explore Genres</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-num">10K+</span>
              <span className="stat-label">Titles</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">4K</span>
              <span className="stat-label">Ultra HD</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">5</span>
              <span className="stat-label">Screens</span>
            </div>
          </div>
        </div>

        {/* RIGHT: The animated card stack */}
        <div className="hero-right">
          <HeroCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;