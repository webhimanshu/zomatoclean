import React, { useState } from "react";
import data from "../food.json";
import FoodCard from "./FoodCard";

const FoodItems = () => {
  const [state, setstate] = useState(data);

  return (
    <>

<h1 className=" lg:ml-36 ml-4 md:text-3xl  text-2xl font-medium text-card-font">Best Food in Bengaluru</h1>
      <div className=" flex justify-center w-full ">
   
      <div className=" flex  flex-wrap  justify-center    w-full  lg:w-4/5">
     
   {
        state.length <0 ? <h1>Loading....</h1>:state.map((data ,index)=>
        (
       <FoodCard data={data} key={index}/>
        ))
    }
             </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default FoodItems;
