import React,{useState} from 'react';
import slider from '../Slider.json';
import Slider from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import Slide from './Slide';


const ImageSlider = () => {

const [state, setstate] = useState(slider);

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
return (
<div className="w-full   bg-footer-bg-color flex justify-center">
<div className=" w-4/5 pb-4">
<h1 className=' text-2xl lg:text-3xl text-text-meal  font-medium  lg:font-normal my-4 '>Eat what makes you happy</h1>




<Slider  {...settings} >
{
  state.map((item,index)=>
  (
 <Slide data={item} key={index}/>
  ))
}
   
</Slider>
   


    
</div>
</div>

  

 


  );
};

export default ImageSlider;
