import "./carousel.css";

const channels = [
  { id: 1, label: "", image: "/logo/PL.png" },
  { id: 2, label: "",      image: "/logo/bundesliga.png" },
  { id: 3, label: "",      image: "/logo/netflix.png" },
  { id: 4, label: "",   image: "/logo/laLiga.png" },
  { id: 5, label: "",        image: "/logo/Champions.png" },
  { id: 6, label: "",        image: "/logo/hbo.png" },
  { id: 7, label: "",        image: "/logo/tenis.png" },
  { id: 8, label: "",        image: "/logo/formula1.png" },
  { id: 9, label: "",        image: "/logo/fifa.jpg" },
  { id: 10, label: "",        image: "/logo/europa.png" },

];

export default function InfiniteMarquee() {
  // Duplicate items to create the seamless loop
  const items = [...channels, ...channels];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-fade-left" />
      <div className="marquee-fade-right" />
      <div className="marquee-track">
        {items.map((ch, i) => (
          <div className="marquee-card" key={i}>
            <img src={ch.image} alt={ch.label} />
            <div className="marquee-label">{ch.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}