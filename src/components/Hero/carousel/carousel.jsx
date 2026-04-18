import React from 'react';
import './carousel.css';
import { useLang } from '../../../context/LanguageContext';


// Import all SVGs directly matching your exact filenames
import amazonPrime from './assets/logos/AmazonPrime.svg';
import discoveryPlus from './assets/logos/DiscoveryPlus.svg';
import disney from './assets/logos/Disney.svg';
import hbo from './assets/logos/HBO.svg';
import netflix from './assets/logos/Netflix.svg';
import svtPlay from './assets/logos/SVTPlay.svg';
import tv4 from './assets/logos/TV4sweden.svg';
import viaplay from './assets/logos/Viaplay.svg';

function Carousel() {
  // Array using only the imported SVGs present in your folder
  const logos = [
    { name: 'SVT Play', path: svtPlay },
    { name: 'Discovery+', path: discoveryPlus },
    { name: 'TV4', path: tv4 },
    { name: 'Netflix', path: netflix },
    { name: 'HBO', path: hbo },
    { name: 'Viaplay', path: viaplay },
    { name: 'Disney+', path: disney },
    { name: 'Amazon Prime', path: amazonPrime },
  ];

  // Duplicate for the infinite scrolling loop
  const duplicatedLogos = [...logos, ...logos];

  const { t } = useLang();

  return (
    <section className="carousel-section">
      <p className="carousel-heading">{t('carousel.title')}</p>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {duplicatedLogos.map((logo, index) => (
            <div className="logo-item" key={`${logo.name}-${index}`}>
              <img src={logo.path} alt={`${logo.name} logo`} loading="lazy" />
            </div>
          ))}
        </div>
        
        {/* Premium fade effect on the edges */}
        <div className="carousel-fade-left"></div>
        <div className="carousel-fade-right"></div>
      </div>
    </section>
  );
}

export default Carousel;