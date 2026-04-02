import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import Layout from './components/Layout/Layout.jsx';
import Device from './components/DeviceCompatibility/DeviceCompatibility.jsx'
import BuyerJourney from './components/BuyerJourney/BuyerJourney.jsx';
import './App.css'; 
import Carousel from './components/Hero/carousel/carousel.jsx'
import Features from './components/Features/Features.jsx';


function App() {
  return (
    <Layout>
      <Hero />
      <Carousel />
      <Features />

      
      <Device />
      <BuyerJourney />

      {/* Add other sections here */}
    </Layout>
  );
}

export default App;