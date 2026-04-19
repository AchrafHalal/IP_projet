import React, { useState, useEffect } from 'react';
import './DeviceCompatibility.css';
import { devices } from './Devices/index.jsx';
// IMPORT LUCIDE ICONS
import { Tv, Laptop, TabletSmartphone, MonitorPlay, Cast, PlaySquare } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';


// ─────────────────────────────────────────────
//  Category Mapping
// ─────────────────────────────────────────────
const CATEGORIES = [
  { 
    id: 'streaming', 
    label: 'Streaming Devices', 
    matchLabels: ['Fire Stick', 'Apple TV', 'MAG Box', 'Enigma2 / Dreambox'] 
  },
  { 
    id: 'tv', 
    label: 'Smart TVs', 
    matchLabels: ['Samsung Smart TV', 'Android TV / Box', 'LG Smart TV'] 
  },
  { 
    id: 'mobile', 
    label: 'Mobile & Tablet', 
    matchLabels: ['iPhone / iPad', 'Android Phone'] 
  },
  { 
    id: 'pc', 
    label: 'Computers & Players', 
    matchLabels: ['Windows PC', 'Mac', 'VLC / Any Player'] 
  }
];

// ─────────────────────────────────────────────
//  Icon Assignment Logic (Overrides PNGs)
// ─────────────────────────────────────────────
const getDeviceIcon = (label) => {
  const name = label.toLowerCase();
  if (name.includes('phone') || name.includes('ipad')) return <TabletSmartphone size={20} strokeWidth={1.5} />;
  if (name.includes('pc') || name.includes('mac')) return <Laptop size={20} strokeWidth={1.5} />;
  if (name.includes('apple tv') || name.includes('android tv')) return <MonitorPlay size={20} strokeWidth={1.5} />;
  if (name.includes('fire stick') || name.includes('mag') || name.includes('enigma2')) return <Cast size={20} strokeWidth={1.5} />;
  if (name.includes('vlc')) return <PlaySquare size={20} strokeWidth={1.5} />;
  // Default for Smart TVs
  return <Tv size={20} strokeWidth={1.5} />;
};

// ─────────────────────────────────────────────
//  Step Carousel
// ─────────────────────────────────────────────
function StepCarousel({ steps }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? steps.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === steps.length - 1 ? 0 : c + 1));

  const step = steps[current] || {};

    const { t } = useLang();
  

  return (
    <div className="sc-wrap">
      <div className="sc-img-wrap">
        {step.image ? (
          <img src={step.image} alt={step.title} className="sc-img" />
        ) : (
          <div className="sc-img-placeholder">
            <span style={{ fontSize: '40px', marginBottom: '8px' }}>🖼️</span>
            <span className="sc-img-label">{t('compatibility.placeholder_img')}</span>
            <code className="sc-img-path">{step.image || 'Add image path'}</code>
          </div>
        )}
        <div className="sc-badge">
          {current + 1} / {steps.length}
        </div>
      </div>

      <div className="sc-body">
        <p className="sc-step-num">{t('compatibility.step_label')} {current + 1}</p>
        <h4 className="sc-step-title">{step.title}</h4>
        <p className="sc-step-text">{step.text}</p>
      </div>

      <div className="sc-nav">
        <button className="sc-nav-btn" onClick={prev}>{t('compatibility.nav_prev')}</button>
        <div className="sc-dots">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`sc-dot ${i === current ? 'active' : ''}`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
        <button className="sc-nav-btn" onClick={next}>{t('compatibility.nav_next')}</button>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────
//  Main component
// ─────────────────────────────────────────────
export default function DeviceCompatibility() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [activeDevice, setActiveDevice] = useState(devices.find(d => d.label === 'Fire Stick') || devices[0]);
  const [animating, setAnimating] = useState(false);

   const { t } = useLang();


  // Get the devices that belong to the currently selected category
  const currentCategoryObj = CATEGORIES.find(c => c.id === activeCategory);
  const visibleDevices = devices.filter(d => currentCategoryObj.matchLabels.includes(d.label));

  const handleCategoryClick = (categoryId) => {
    if (categoryId === activeCategory) return;
    setActiveCategory(categoryId);
    
    // Automatically select the first device in the new category
    const newCategoryObj = CATEGORIES.find(c => c.id === categoryId);
    const firstDeviceInCategory = devices.filter(d => newCategoryObj.matchLabels.includes(d.label))[0];
    
    if (firstDeviceInCategory) {
      selectDevice(firstDeviceInCategory);
    }
  };

  const selectDevice = (device) => {
    if (device.id === activeDevice.id) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveDevice(device);
      setAnimating(false);
    }, 200); 
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1 }); 

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); 
  }, []);

  return (
    <section className="dc-section" id="compatibility">
      <div className="dc-container">
        
        <div className="dc-header">
          <div className="section-badge reveal">{t('compatibility.badge')}</div>
          <h2 className="dc-title reveal delay-1">{t('compatibility.title')}</h2>
          <p className="dc-subtitle reveal delay-2">
            {t('compatibility.subtitle')}
          </p>
        </div>

        <div className="dc-panel reveal delay-3">
          
          {/* TIER 1: CATEGORY TABS */}
          <div className="dc-categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`dc-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* TIER 2: DEVICE PILLS (Filtered) */}
          <div className="dc-list-wrapper" key={activeCategory}>
            <div className="dc-list">
              {visibleDevices.map((d) => (
                <button
                  key={d.id}
                  className={`dc-item ${activeDevice.id === d.id ? 'dc-item--active' : ''}`}
                  onClick={() => selectDevice(d)}
                >
                  <span className="dc-item-icon">
                    {getDeviceIcon(d.label)}
                  </span>
                  <span className="dc-item-label">{d.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* TIER 3: BOTTOM CARD DETAILS */}
          <div className="dc-card-wrap">
            <div className={`dc-card ${animating ? 'dc-card--out' : ''}`}>
              
              <div className="dc-card-top">
                <div className="dc-app-icon">
                  {React.cloneElement(getDeviceIcon(activeDevice.label), { size: 40 })}
                </div>
                <div className="dc-card-top-text">
                  <h3 className="dc-app-name">{activeDevice.appName || activeDevice.label}</h3>
                  <p className="dc-app-desc">{activeDevice.description || t('compatibility.default_desc')}</p>
                </div>
              </div>

              <div className="dc-divider" />


              {/* ── INSTALLATION STEPS ── */}
              <p className="dc-steps-label">{t('compatibility.installation_steps')}</p>
              <StepCarousel key={activeDevice.label} steps={activeDevice.steps || []} />

              <div className="dc-divider" style={{ marginTop: '30px', marginBottom: '20px' }} />

              {/* ── APP FEATURES ── */}
              <p className="dc-steps-label">{t('compatibility.app_features')}</p>
              <div className="dc-features-grid">
                {(activeDevice.features || []).map((f, i) => (
                  <div className="dc-feature" key={i}>
                    <span className="dc-check">✓</span>
                    <span className="dc-feature-text">{f}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}