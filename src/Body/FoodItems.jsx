import React, { useState } from "react";
import data from "../food.json";

const FoodItems = () => {
  const [state, setstate] = useState(data);

  return (
    <>

<h1 className=" lg:ml-36 ml-4 md:text-3xl  text-2xl font-medium text-card-font">Best Food in Bengaluru</h1>
      <div className=" flex justify-center w-full ">
   
      <div className=" flex  flex-wrap  justify-center    w-full  lg:w-4/5">
     
   {
        state.length <0 ? <h1>Loading....</h1>:state.map((data )=>
        (
            <div className="w-80  h-96   hover:shadow-md  hover:shadow-gray-500 my-4 rounded-2xl ease-linear p-2 mx-2 " key={data.id}>
         <div className="w-full h-[240px] mb-2">
          <img
            src={data.image}
            className="rounded-2xl  h-full w-full"
          />
          <span className="border px-1 py-1 relative -top-8 left-60 bg-slate-50 rounded-md text-xs">
          
            {data.time} min
          </span>
          </div>
          {/* <div className="border"> */}
            <div className="flex  justify-between mx-1">
              <h1 className="text-xl font-medium text-card-font">{data.restaurent}</h1>
              <span className="bg-green-700 text-white rounded text-xs font-medium px-1 flex items-center ">
                <p>{data.rating}</p> <i className="fas fa-star"></i>
              </span>
            </div>
            <div className="flex  justify-between mx-1 mt-1 text-base text-font-color">
              <p>{data.title.slice(0,15)}...</p>
              <span>
                <i class="fas fa-rupee-sign"></i>{data.price}for one
              </span>
            </div>
            <div className="h-px w-full bg-line-color mt-4"></div>
            <div className="flex items-center pt-2">

             <img src="./foodImage/safe.webp" className="h-6 w-10 mr-2 ml-2"/>
             <p className="text-sm text-font-color">Follows all Max Safety measure to ensure your food in safe </p>
             <img src="./foodImage/grow.webp" className="h-6 w-6 mr-2"/>
             
            </div>
          </div>

   
        ))
    }
             </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default FoodItems;
