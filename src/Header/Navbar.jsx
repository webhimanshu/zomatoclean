import React,{useState} from "react";

const Navbar = () => {
  const[show ,setShow]=useState(true); 
  return (
<>
 <div className="w-full h-16 flex items-center md:justify-center justify-between px-3 pt-3" >
 <div className="text-2xl md:hidden block relative z-40  ">
 <i  className={show?'fas fa-bars':'fas fa-times'} onClick={()=>setShow(!show)}></i>   
 </div>
 <img src="./images/zomatologo.jpg" className="h-7 mr-6 "/>
<div className="hidden border  w-1/2 md:flex items-center h-14 rounded-md border-search-border p-3 shadow-sm shadow-gray-200">
<div className="lg:w-2/5">
<i className="fas fa-map-marker-alt text-zomato-rgba text-xl mr-2"></i>
          <input type="text" placeholder="Bengaluru" className=" w-2/3 lg:w-5/6 focus:outline-none "/>
          <i className="fas fa-caret-down text-gray-600"></i>
</div>
<div className="w-[2px] h-6 bg-line-color"></div>
<div className="lg:w-3/5">
<i className="fas fa-search text-logo-color text-xl  mx-3"></i>
 <input type="text" placeholder="Search for restaurent, cuisine or a dish" className=" md: w-2/3 lg:w-5/6 focus:outline-none  "/>          
</div>
</div>
<div className={show?("md:w-1/5 fixed mt-16   top-3 md:mt-0 md:static  -left-full bg-white w-full  h-full  "):(" z-30  overflow-y-hidden  border  md:w-1/5 fixed  md:mt-0  md:static bg-white w-full left-0  top-0 h-full")}>
<ul className=" md:flex justify-evenly my-16  md:my-2  ">
  <li className="my-5   ml-6 md:my-0 md:ml-0"><a href="#" className="text-font-color text-xl font-light  p-2 rounded-lg hover:text-gray-800   ">Log in</a></li>
  <li className="my-5    ml-6 md:my-0 md:ml-0"><a href="#" className="text-font-color text-xl font-light   p-2 rounded-lg hover:text-gray-800  ">Sign up</a></li>
</ul>
</div>
 </div>

      </>
      );
};

export default Navbar;
