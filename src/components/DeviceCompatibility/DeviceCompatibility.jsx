import { useState } from 'react'
import './DeviceCompatibility.css'
import { devices } from './Devices/index.jsx';

// ─────────────────────────────────────────────
//  Each device has:
//  - steps[]       → text instructions (one per carousel slide)
//  - images[]      → put your screenshot paths here, e.g. "/steps/firestick/step1.png"
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
//  Step Carousel inside the card
// ─────────────────────────────────────────────
function StepCarousel({ steps, color }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? steps.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === steps.length - 1 ? 0 : c + 1))

  const step = steps[current]

  return (
    <div className="sc-wrap">
      {/* Image area */}
      <div
        className="sc-img-wrap"
        style={{ background: color + '10', border: `1px solid ${color}22` }}
      >
        {step.image ? (
          <img src={step.image} alt={step.title} className="sc-img" />
        ) : (
          <div className="sc-img-placeholder" style={{ color: color + '66' }}>
            <span style={{ fontSize: '40px' }}>🖼️</span>
            <span className="sc-img-label">Add screenshot here</span>
            <code className="sc-img-path">{step.image}</code>
          </div>
        )}

        {/* Step counter badge */}
        <div className="sc-badge" style={{ background: color }}>
          {current + 1} / {steps.length}
        </div>
      </div>

      {/* Step text */}
      <div className="sc-body">
        <p className="sc-step-num" style={{ color: color }}>
          Step {current + 1}
        </p>
        <h4 className="sc-step-title">{step.title}</h4>
        <p className="sc-step-text">{step.text}</p>
      </div>

      {/* Navigation */}
      <div className="sc-nav">
        <button
          className="sc-nav-btn"
          onClick={prev}
          style={{ border: `1px solid ${color}33`, color: color }}
        >
          ‹ Prev
        </button>

        <div className="sc-dots">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="sc-dot"
              style={{
                background: i === current ? color : color + '33',
                width: i === current ? '20px' : '8px'
              }}
            />
          ))}
        </div>

        <button
          className="sc-nav-btn"
          onClick={next}
          style={{ border: `1px solid ${color}33`, color: color }}
        >
          Next ›
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
//  Main component
// ─────────────────────────────────────────────
export default function DeviceCompatibility() {
  const [active, setActive] = useState(devices[0]);
  const [animating, setAnimating] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleDevices = showAll ? devices : devices.slice(0, 9);

  const select = (device) => {
    if (device.id === active.id) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(device);
      setAnimating(false);
    }, 180);
  };

  return (
    <section className="dc-section" id="compatibility">
      <div className="dc-container">
          <div className="dc-header">
        <p className="dc-tag">COMPATIBILITY</p>
        <h2 className="dc-title">Works on all your devices.</h2>
        <p className="dc-subtitle">
          Select your device and follow the step-by-step installation guide.
        </p>
      </div>

      <div className="dc-panel">
        {/* LEFT list */}
        <div className={`dc-list ${showAll ? "dc-list--expanded" : ""}`}>
          {visibleDevices.map((d) => (
            <button
              key={d.id}
              className={`dc-item ${active.id === d.id ? 'dc-item--active' : ''}`}
              onClick={() => select(d)}
              style={active.id === d.id ? { color: d.appColor } : {}}
            >
              <span className="dc-item-icon">
                {d.deviceImage ? (
                  <img src={d.deviceImage} alt={d.label} />
                ) : (
                  d.icon
                )}
              </span>
              <span className="dc-item-label">{d.label}</span>
            </button>
          ))}

          {devices.length > 9 && (
            <button
              className="dc-show-more"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less ▲" : "Show More ▼"}
            </button>
          )}
        </div>

        {/* RIGHT card */}
        <div className="dc-card-wrap">
          <div className={`dc-card ${animating ? 'dc-card--out' : ''}`}>
            {/* Card header */}
            <div className="dc-card-top">
              <div
                className="dc-app-icon"
                style={{ background: active.appColor + '15' }}
              >
                {active.deviceImage ? (
                  <img
                    src={active.deviceImage}
                    alt={active.appName}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain'
                    }}
                  />
                ) : (
                  <span style={{ fontSize: '38px', lineHeight: 1 }}>
                    {active.icon}
                  </span>
                )}
              </div>
              <div className="dc-card-top-text">
                <h3 className="dc-app-name">{active.appName}</h3>
                <p className="dc-app-desc">{active.description}</p>
              </div>
            </div>

            {/* Features */}
            <div className="dc-divider" />
            <div className="dc-features-grid">
              {active.features.map((f, i) => (
                <div className="dc-feature" key={i}>
                  <span
                    className="dc-check"
                    style={{ background: active.appColor, color: '#fff' }}
                  >
                    ✓
                  </span>
                  <span className="dc-feature-text">{f}</span>
                </div>
              ))}
            </div>

            {/* Step carousel */}
            <div className="dc-divider" style={{ marginTop: '20px' }} />
            <p className="dc-steps-label">Installation steps</p>
            <StepCarousel steps={active.steps} color={active.appColor} />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
