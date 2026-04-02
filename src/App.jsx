import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import Layout from './components/Layout/Layout.jsx';
import Device from './components/DeviceCompatibility/DeviceCompatibility.jsx'
import './App.css'; 
import Carousel from './components/Hero/carousel/carousel.jsx'
import Features from './components/Features/Features.jsx';
import FaqPage from './components/FAQ/FaqPage.jsx';
import Footer from './components/Footer/FooterPage.jsx';


function App() {
  return (
    <Layout>
      <Hero />
      <Carousel />
      <Features />

      
      <Device />
      <FaqPage />
      <Footer />
      {/* Add other sections here */}
    </Layout>
  );
}

export default App;