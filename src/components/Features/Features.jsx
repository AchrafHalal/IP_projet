import React, { useState, useEffect } from "react";
import { FaTv, FaRocket, FaMobileAlt } from "react-icons/fa";
import "./Features.css";

// --- IMPORT ALL LOCAL MOVIES IMAGES ---
import avatarImg from './Img_src/Movies/Avatar.webp';
import crime101Img from './Img_src/Movies/Crime101.webp';
import f1Img from './Img_src/Movies/F1.webp';
import greenland2Img from './Img_src/Movies/Greenland2.webp';
import hailMaryImg from './Img_src/Movies/HailMary.webp';
import nobody2Img from './Img_src/Movies/Nobody2.webp';
import peakyBlindersImg from './Img_src/Movies/PeakyBlindersTheImmortalMan.webp';
import scream7Img from './Img_src/Movies/Scream7.webp';
import sendHelpImg from './Img_src/Movies/SendHelp.webp';
import theDramaImg from './Img_src/Movies/TheDrama.webp';
import superMarioImg from './Img_src/Movies/TheSuperMarioBrosMovie.webp';

// --- IMPORT ALL LOCAL SERIES IMAGES ---
import beckImg from './Img_src/Series/Beck.webp';
import brilliantMindsImg from './Img_src/Series/BrilliantMinds.webp';
import escortBoysImg from './Img_src/Series/EscortBoys.webp';
import harryWildImg from './Img_src/Series/HarryWild.webp';
import hotdImg from './Img_src/Series/HouseoftheDragon.webp';
import loveIsBlindImg from './Img_src/Series/LoveisBlindSverige.webp';
import oxenImg from './Img_src/Series/Oxen.webp';
import professorTImg from './Img_src/Series/ProfessorT.webp';
import areMurdersImg from './Img_src/Series/TheAreMurders.webp';
import breakthroughImg from './Img_src/Series/TheBreakthrough.webp';
import newNursesImg from './Img_src/Series/TheNewNurses.webp';
import rainmakerImg from './Img_src/Series/TheRainmaker.webp';
import restaurantImg from './Img_src/Series/TheRestaurant.webp';
import wildCherryImg from './Img_src/Series/WildCherry.webp';

// --- IMPORT ALL LOCAL SHOWS IMAGES ---
import borderControlImg from './Img_src/Shows/BorderControlSweden.webp';
import fangatPaPolisensImg from './Img_src/Shows/Fangatpapolisenskamera.webp';
import gillaLagetImg from './Img_src/Shows/Gillalaget.webp';
import girlsOfStockholmImg from './Img_src/Shows/GirlsofStockholm.webp';
import lolSwedenImg from './Img_src/Shows/LOLLastOneLaughingSweden.webp';
import melodifestivalenImg from './Img_src/Shows/Melodifestivalen.webp';
import overAtlantenImg from './Img_src/Shows/OverAtlanten.webp';
import renoveringsdrommarImg from './Img_src/Shows/Renoveringsdrömmar.webp';
import robinsonImg from './Img_src/Shows/Robinson.webp';
import wahlgrensVarldImg from './Img_src/Shows/WahlgrensVarld.webp';

// The master database of content
const contentData = {
  sports: [
    { title: 'Wimbledon', image: 'https://via.placeholder.com/400x600/181818/FFFFFF?text=Wimbledon' },
    { title: 'Roland-Garros', image: 'https://via.placeholder.com/400x600/001A46/FFFFFF?text=Roland-Garros' },
    { title: 'US Open', image: 'https://via.placeholder.com/400x600/181818/FFFFFF?text=US+Open' },
    { title: 'Australian Open', image: 'https://via.placeholder.com/400x600/001A46/FFFFFF?text=Australian+Open' },
    { title: 'Swedish Open (Båstad)', image: 'https://via.placeholder.com/400x600/181818/FFFFFF?text=Swedish+Open' },
    { title: 'Allsvenskan', image: 'https://via.placeholder.com/400x600/001A46/FFFFFF?text=Allsvenskan' },
    { title: 'SHL', image: 'https://via.placeholder.com/400x600/181818/FFFFFF?text=SHL' },
  ],
  movies: [
    { title: 'Avatar: Fire and Ash', image: avatarImg },
    { title: 'Crime 101', image: crime101Img },
    { title: 'F1', image: f1Img },
    { title: 'Greenland: Migration', image: greenland2Img },
    { title: 'Project Hail Mary', image: hailMaryImg },
    { title: 'Nobody 2', image: nobody2Img },
    { title: 'Peaky Blinders: The Immortal Man', image: peakyBlindersImg },
    { title: 'Scream 7', image: scream7Img },
    { title: 'Send Help', image: sendHelpImg },
    { title: 'The Drama', image: theDramaImg },
    { title: 'The Super Mario Bros. Movie', image: superMarioImg },
  ],
  series: [
    { title: 'Beck', image: beckImg },
    { title: 'Brilliant Minds', image: brilliantMindsImg },
    { title: 'Escort Boys', image: escortBoysImg },
    { title: 'Harry Wild', image: harryWildImg },
    { title: 'House of the Dragon', image: hotdImg },
    { title: 'Love is Blind Sverige', image: loveIsBlindImg },
    { title: 'Oxen', image: oxenImg },
    { title: 'Professor T', image: professorTImg },
    { title: 'The Åre Murders', image: areMurdersImg },
    { title: 'The Breakthrough', image: breakthroughImg },
    { title: 'The New Nurses', image: newNursesImg },
    { title: 'The Rainmaker', image: rainmakerImg },
    { title: 'The Restaurant', image: restaurantImg },
    { title: 'Wild Cherry', image: wildCherryImg },
  ],
  shows: [
    { title: 'Border Control Sweden', image: borderControlImg },
    { title: 'Fångat på polisens kamera', image: fangatPaPolisensImg },
    { title: 'Gilla läget', image: gillaLagetImg },
    { title: 'Girls of Stockholm', image: girlsOfStockholmImg },
    { title: 'LOL: Last One Laughing', image: lolSwedenImg },
    { title: 'Melodifestivalen', image: melodifestivalenImg },
    { title: 'Öfver Atlanten', image: overAtlantenImg },
    { title: 'Renoveringsdrömmar', image: renoveringsdrommarImg },
    { title: 'Robinson', image: robinsonImg },
    { title: 'Wahlgrens Värld', image: wahlgrensVarldImg },
  ]
};

export default function Features() {
  const [activeTab, setActiveTab] = useState('sports');

  const currentData = contentData[activeTab];
  const loopData = [...currentData, ...currentData]; 

  // --- SCROLL REVEAL OBSERVER ---
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
    <section className="features-section" id="Features">
      <div className="features-container">
        
        {/* --- HEADER --- */}
        <div className="features-header">
          
          <div className="section-badge reveal">Premium Content</div>
          
          <h2 className="features-title reveal delay-1">
            Unlimited Entertainment.<br />
            <span className="accent-text">One Subscription.</span>
          </h2>
          <p className="features-subtitle reveal delay-2">
            Explore thousands of live events, blockbuster movies, and binge-worthy series targeted for you.
          </p>
          
          {/* Centered Badges with Green Icons */}
          <div className="features-badges reveal delay-3">
            <span className="badge-item">
              <FaTv className="badge-icon" /> Flawless 4K
            </span>
            <span className="badge-item">
              <FaRocket className="badge-icon" /> No Buffering
            </span>
            <span className="badge-item">
              <FaMobileAlt className="badge-icon" /> Multi-Device
            </span>
          </div>
        </div>

        {/* --- TABS --- */}
        <div className="features-tabs reveal delay-4">
          {['sports', 'movies', 'series', 'shows'].map((tab) => (
            <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`} 
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} 
            </button>
          ))}
        </div>

        {/* --- CONTINUOUS POSTER MARQUEE --- */}
        <div className="features-slider-wrapper reveal delay-5" key={activeTab}>
          
          {/* WE PASS THE DYNAMIC ARRAY LENGTH INTO CSS VARIABLES HERE */}
          <div 
            className="features-slider"
            style={{ 
              '--card-count': currentData.length, 
              '--loop-count': loopData.length 
            }}
          >
            {loopData.map((item, index) => (
              <div key={`${item.title}-${index}`} className="feature-card">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
            ))}
          </div>
          
          <div className="slider-fade-left"></div>
          <div className="slider-fade-right"></div>
        </div>

      </div>
    </section>
  );
}