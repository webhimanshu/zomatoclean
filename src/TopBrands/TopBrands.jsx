import React,{useState} from 'react';
import brands from '../Brands.json';
import Slider from "react-slick";
import NextArrow from '../ImageSliding/NextArrow';
import PrevArrow from '../ImageSliding/PrevArrow';
import Brands from './Brands';
const TopBrands = () => 


{

    
const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2
    }
  },
  {
    breakpoint: 450,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 2
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 2
    }
  }


]
};
    const [state, setstate] = useState(brands);
  return( <div className=" w-full h-[250px] bg-white flex justify-center ">
<div className="w-4/5 ">
<h1 className='text-3xl text-text-meal font-normal my-4 '>Top Brands For You</h1>

<Slider {...settings}>
{
state.map((item,index)=>
(

<Brands data={item} key={index}/>
))
}

</Slider>

</div>
  </div>)
};

export default TopBrands;
