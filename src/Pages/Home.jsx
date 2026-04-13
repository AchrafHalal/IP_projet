import Hero from '../components/Hero/Hero.jsx';
import Carousel from '../components/Hero/carousel/carousel.jsx';
import Features from '../components/Features/Features.jsx';
import Benefits from '../components/Benefits/Benefits.jsx';
import Device from '../components/DeviceCompatibility/DeviceCompatibility.jsx';
import Pricing from '../components/Pricing/Pricing.jsx';
import BuyerJourney from '../components/BuyerJourney/BuyerJourney.jsx';
import FaqPage from '../components/FAQ/FaqPage.jsx';
import ChannelList from '../components/ChannelList/ChannelList.jsx';
import Contact from '../components/Contact/Contact.jsx';
export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <ChannelList />
      <Features />
      <Benefits />
      <Device />
      <Pricing />
      <BuyerJourney />
      <FaqPage />
      <Contact />
    </>
  );
};