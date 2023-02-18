import React from 'react';
import BestSeller from '../components/bestSeller/BestSeller';
import ControlledCarousel from '../components/ControlledCarousel';
import Featured from '../components/Featured';
import Footer from '../components/footer/Footer';

import Header from '../components/header/Header';
import Section4 from '../components/Section4';
import ShopNow from '../components/ShopNow';


const Home = () => {
    return (
        <>
          <Header/>
          <ControlledCarousel/>
          <BestSeller/>
          <ShopNow/>
          <Section4/>
          <Featured/>
          <Footer/>
      
        </>
    );
}

export default Home;
