import React from 'react';
import Box from './Box';

const FirstSection = () => {
  return (
  <div className='flex justify-between'>
    <img src="./images/zomatologo.jpg" className="h-7"/>
    <div className="lg:flex ">
 <Box image="/images/flag.png "  title="India"  icon="fas fa-angle-down  "/>
 <Box image="fas fa-globe"  title="English"  icon="fas fa-angle-down "/>
  </div>
  </div>
  );
};

export default FirstSection;
