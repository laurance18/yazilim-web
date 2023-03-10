import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import CopyRight from '../components/CopyRight';
import Events from '../components/Events';
import Footer from '../components/Footer_1';
import Navbar1 from '../components/Navbar1';
import Stakeholders from '../components/Stakeholders';

const Home = () => {
  return (
    <div className='w-screen'>
      <Navbar1 />
      <div className='mt-16'>
        <Banner />
        <AboutUs />
        <Events />
        <Stakeholders />
        <Footer />
        <CopyRight />
      </div>
    </div>
  )
}

export default Home