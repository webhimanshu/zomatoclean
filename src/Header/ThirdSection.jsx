import React ,{useState}from 'react'

const ThirdSection = () => 
{
    const [divVisible, setDivVisible] = useState(true)
    const [div1Visible, setDiv1Visible] = useState(false)
    const [div2Visible, setDiv2Visible] = useState(false)
//     const handleClickDelivery=()=>
//     {
//      setDivVisible(!divVisible)
//      setDiv1Visible(false);
//      setDiv2Visible(false);
//     }
//     const handleClickDinning=()=>
//     {
//      setDiv1Visible(!div1Visible)
//      setDivVisible(false);
//   setDiv2Visible(false)
//     }
//     const handleClickNight=()=>
//     {
//      setDiv2Visible(!div2Visible)
//      setDivVisible(false);
//      setDivVisible(false);
//     }
  const handleClick=(id)=>
  {
   switch(id)
   {
case 0:
    setDivVisible(!divVisible);
    setDiv1Visible(false);
    setDiv2Visible(false);
    break;
    case 1:
    setDiv1Visible(!div1Visible);
    setDivVisible(false);
    setDiv2Visible(false);
    break;
    case 2:
    setDiv2Visible(!div2Visible);
    setDivVisible(false);
    setDiv1Visible(false);
    break;
    default:
        setDiv2Visible(false);
        setDivVisible(false);
        setDiv1Visible(false);   
   }
   
  }  
return (
<>
<div className=' flex md:w-4/5 w-full '>
        <div className={divVisible?'border-zomato-rgba   border-b-2 h-20 w-44 flex items-center justify-center mx-2':' mx-2 border-white  border-0 h-20 w-44 flex items-center justify-center'} onClick={()=>handleClick(0)}>
        <div className={divVisible?' flex items-center  justify-center border h-14 w-14  bg-bike-color rounded-full ':' flex items-center  justify-center border h-14 w-14 bg-bg-color rounded-full '}>
            <img src={divVisible?'/images/bikeColor.avif':'/images/bike.webp'} className='h-8 w-8  '/>
        </div> 
        <div className='mx-2 '>
        <h1 className= {divVisible?'text-zomato-rgba md:text-xl  text-base font-medium ':'text-text-color  md:text-xl font-medium '}>Delivery</h1>
        </div>
       </div>
       <div className={div1Visible?'border-zomato-rgba mx-2  border-b-2 h-20 w-44 flex items-center justify-center':'mx-2 border-white  border-0 h-20 w-44 flex items-center justify-center'} onClick={()=>handleClick(1)}>
        <div className={div1Visible?' flex items-center   justify-center border h-14 w-14  bg-bike-color rounded-full ':' flex items-center  justify-center border h-14 w-14 bg-bg-color rounded-full '}>
            <img src={div1Visible?'/images/plateColor.webp':'/images/plateWhite.avif'} className='h-8 w-8  '/>
        </div> 
        <div className='mx-2'>
        <h1 className= {div1Visible?'text-zomato-rgba md:text-xl  text-sm font-medium ':'text-base  text-text-color  md:text-xl font-medium '}>Dinning</h1>
        </div>
       </div>



     

       <div className={div2Visible?'border-zomato-rgba mx-2  border-b-2 h-20 w-44 flex items-center justify-center':'mx-2 border-white  border-0 h-20 w-44 flex items-center justify-center'} onClick={()=>handleClick(2)}>
        <div className={div2Visible?' flex items-center   justify-center border h-14 w-14  bg-bike-color rounded-full ':' flex items-center  justify-center border h-14 w-14 bg-bg-color rounded-full '}>
            <img src={div2Visible?'/images/BearColor.webp':'/images/bearWhite.webp'} className='h-8 w-8  '/>
        </div> 
        <div className='mx-2'>
        <h1 className= {div2Visible?'text-zomato-rgba md:text-xl  text-sm font-medium ':'text-base  text-text-color  md:text-xl font-medium '}>Nightlife</h1>
        </div>
       </div>
</div>
       </>   
    )
}

export default ThirdSection
