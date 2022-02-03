import React from 'react';
import Slider from "react-slick";

const Slide = ({data}) => {

console.log(data)
   
  return <>
     <div className="w-36 h-36  ">
      <img src={data.image} className='h-28  w-28 rounded-full ml-4 mt-1' alt="image Data"/>
    <p className="text-base font-medium text-text-meal  text-center">{data.title}</p> 
    </div>
  </>
};

export default Slide;
