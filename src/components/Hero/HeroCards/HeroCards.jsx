import React, { useState, useEffect } from 'react';
import './HeroCards.css';

const cards = [
  {
    id: 1,
    tag: 'Premier League',
    title: 'Live Football',
    subtitle: 'HD Stream',
    gradient: 'linear-gradient(160deg, #0d2137 0%, #060e1a 100%)',
    accent: '#3b82f6',
    image: '/images/football.jfif'
  },
  {
    id: 2,
    tag: 'Now Streaming',
    title: 'Top Series',
    subtitle: '4K Ultra HD',
    gradient: 'linear-gradient(160deg, #1a0d2e 0%, #0a0618 100%)',
    accent: '#a855f7',
    image: '/images/formula1.jfif'
  },
  {
    id: 3,
    tag: 'Blockbuster',
    title: 'Latest Movies',
    subtitle: 'Instant Access',
    gradient: 'linear-gradient(160deg, #1a0d0d 0%, #180608 100%)',
    accent: '#ef4444',
    image: '/images/basketball.jfif'
  }
];

const HeroCards = () => {
  const [active, setActive] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; 

    const interval = setInterval(() => {
      setActive((prev) => (prev % cards.length) + 1);
    }, 3000); 

    return () => clearInterval(interval); // Cleanup timer on unmount
  }, [isPaused]);

  const getPos = (id) => {
    const diff = id - active;
    if (diff === 0) return 'center';
    if (diff === -1 || (active === 1 && id === cards.length)) return 'left';
    return 'right';
  };

  const posStyles = {
    center: { transform: 'translateX(0) rotate(0deg) scale(1)', zIndex: 10, filter: 'none', opacity: 1 },
    left: { transform: 'translateX(-120px) rotate(-9deg) scale(0.86)', zIndex: 5, filter: 'blur(2.5px) brightness(0.4)', opacity: 0.8 },
    right: { transform: 'translateX(120px) rotate(9deg) scale(0.86)', zIndex: 5, filter: 'blur(2.5px) brightness(0.4)', opacity: 0.8 }
  };

  return (
    <div 
      className="hero-cards-wrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-cards-fan">
        {cards.map((card) => {
          const pos = getPos(card.id);
          return (
            <div
              key={card.id}
              className="hero-card"
              onClick={() => setActive(card.id)}
              style={{
                background: card.gradient,
                boxShadow: pos === 'center' 
                  ? `0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px ${card.accent}30` 
                  : '0 20px 40px rgba(0,0,0,0.5)',
                cursor: pos !== 'center' ? 'pointer' : 'default',
                ...posStyles[pos]
              }}
            >
              <div className="hc-top">
                <span className="hc-tag" style={{ background: card.accent + '22', color: card.accent, border: `1px solid ${card.accent}44` }}>
                  {card.tag}
                </span>
              </div>

              <div className="hc-image-full">
                <img src={card.image} alt={card.title} className="hc-img" />
              </div>

              <div className="hc-bottom">
                <div className="hc-title">{card.title}</div>
                <div className="hc-sub" style={{ background: card.accent + '18', color: card.accent }}>
                  {card.subtitle}
                </div>
                <div className="hc-line" style={{ 
                    background: card.accent, 
                    boxShadow: pos === 'center' ? `0 0 10px ${card.accent}` : 'none',
                    opacity: pos === 'center' ? 0.8 : 0.25 
                }} />
              </div>

              <div className="hc-orb" style={{ background: card.accent, opacity: pos === 'center' ? 0.14 : 0.06 }} />
            </div>
          );
        })}
      </div>

      <div className="hc-dots">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => setActive(card.id)}
            className="hc-dot"
            style={{
              background: active === card.id ? card.accent : '#1e293b',
              width: active === card.id ? '22px' : '8px',
              boxShadow: active === card.id ? `0 0 8px ${card.accent}` : 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCards;