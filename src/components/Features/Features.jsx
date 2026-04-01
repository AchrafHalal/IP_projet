import React, { useState , useEffect , useRef } from "react";
import "./Features.css";

const data = [
  {
    title: "Live Channels",
    image: "/images/basketball.jfif", 
  },
  {
    title: "Sports",
    image: "/images/football.jfif",
  },
  {
    title: "Movies",
    image: "/images/formula1.jfif",
  },
  {
    title: "Series",
    image: "/images/basketball.jfif",
  },
  {
    title: "Documentaries",
    image: "/images/formula1.jfif",
  },
  {
    title: "News",
    image: "/images/basketball.jfif",
  },
  {
    title: "Entertainment",
    image: "/images/football.jfif",
  }
];

export default function Features() {
  const [active, setActive] = useState(1);
  const intervalRef = useRef(null);

  //  start auto slide
  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 3000);
  };

  // stop auto slide
  const stopAuto = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto(); // cleanup
  }, []);

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Experience Entertainment <span>Without Limits</span>
          </h2>
          <p className="features-subtitle">
            Discover a world of endless entertainment options at your fingertips.
          </p>
          <p className="features-badge">⚡ 4K Streaming • No Buffering • Multi-Device</p>
        </div>

        {/* Slider */}
        <div
          className="features-slider"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          {data.map((item, index) => {
            let position = index - active;

            return (
              <div
                key={index}
                className={`feature-card ${
                  position === 0 ? "active" : "inactive"
                }`}
                style={{
                  transform: `translateX(${position * 200}px) scale(${
                    position === 0 ? 1.1 : 0.9
                  })`,
                  zIndex: position === 0 ? 2 : 1,
                }}
              >
                <img src={item.image} alt="" />
                <div className="feature-overlay"></div>
                <div className="feature-title">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}