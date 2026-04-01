import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import Layout from './components/Layout/Layout.jsx'
import './App.css'; 
import Carousel from './components/Hero/carousel/carousel.jsx'
import Features from './components/Features/Features.jsx';


function App() {
  return (
    <Layout>
      <Hero />
      <Carousel />
      <Features />

      {/* Add other sections here */}
    </Layout>
  );
}

export default App;