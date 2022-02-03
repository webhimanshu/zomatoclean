import React from 'react';

const Brands = ({data}) => {
  return <div className="w-36 h-40   ">
  <img src={data.image} className='h-28  w-28 rounded-full ml-4 mt-1 shadow-xl mb-1 bg-contain shadow-gray-200' alt="image Data"/>
<p className="text-sm text-text-meal  text-center">{data.title}</p>
<p className='text-sm  text-text-meal  text-center'>{data.time}min</p> 
</div> ;
};

export default Brands;
