import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import Layout from './components/Layout/Layout.jsx'
import './App.css'; 
import Carousel from './components/Hero/carousel/carousel.jsx'


function App() {
  return (
    <Layout>
      <Hero />
      <Carousel />
      {/* Add other sections here */}
    </Layout>
  );
}

export default App;