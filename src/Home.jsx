import React from 'react';
import Commons from './Commons';
import web from '../src/images/w10.png';

const Home = () => {
  return (
    <Commons
      name="Welcome to PIAIC Bootcamp 2020"
      imgsrc={web}
      visit="/courses"
      btname="Get Started"
    ></Commons>
  );
};

export default Home;
