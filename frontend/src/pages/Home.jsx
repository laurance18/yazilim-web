import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import CopyRight from '../components/CopyRight';
import Events from '../components/Events';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Stakeholders from '../components/Stakeholders';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <Events />
      <Stakeholders />
      <Footer />
      <CopyRight />
    </div>
  )
}

export default Home