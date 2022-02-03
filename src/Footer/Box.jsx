import React from 'react';

const Box = ({image,icon,title}) => {
  return( 

    <div className='border  mb-2 lg:mb-0 border-border-color flex  items-center  text-2xl rounded-md  text-xl  font-normal py-1 px-2 mr-4' >
     <span><img src={image} className='h-4 w-6 mr-2'/></span>      
     <span> <h3 className='mr-2'>{title}</h3></span>
     <span className='text-slate-900 font-light  text-base '><i className={icon}></i></span>
    </div>

   
  );
};

export default Box;
