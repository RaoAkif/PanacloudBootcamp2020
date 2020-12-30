import React from 'react';
import Commons from './Commons';
import web1 from '../src/images/w2.png';

const About = () => {
  return (
    <Commons
      name="PIAIC Offers Free Learning Opportunity for FullStack Development"
      imgsrc={web1}
      visit="/contact"
      btname="Contact now"
    ></Commons>
  );
};

export default About;
