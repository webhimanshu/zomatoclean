import React from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const Footer = () => {
  return(
      <div className='flex justify-center bg-footer-bg-color px-4 lg:px-0'>
  <div className="w-full   lg:w-4/5 pt-10">
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
  </div>
  </div>
  ) ;
};

export default Footer;
