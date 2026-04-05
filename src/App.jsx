import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import Layout from './components/Layout/Layout.jsx';
import Device from './components/DeviceCompatibility/DeviceCompatibility.jsx'
import BuyerJourney from './components/BuyerJourney/BuyerJourney.jsx';
import './App.css'; 
import Carousel from './components/Hero/carousel/carousel.jsx'
import Features from './components/Features/Features.jsx';
import FaqPage from './components/FAQ/FaqPage.jsx';
import Footer from './components/Footer/FooterPage.jsx';
import Benefits from './components/Benefits/Benefits.jsx';
import Pricing from './components/Pricing/Pricing.jsx';

function App() {
  return (
    <Layout>
      <Hero />
      <Carousel />
      <Features />
      <Benefits />

      <Device />
      <Pricing />
      <BuyerJourney />

      <FaqPage />
      <Footer />
      {/* Add other sections here */}
    </Layout>
  );
}

export default App;