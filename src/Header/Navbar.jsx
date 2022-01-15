import React,{useState} from "react";

const Navbar = () => {
    const [state, setstate] = useState(true);
  return (
<>
     <div className="box-border flex    md:items-center md:justify-center w-full justify-between  border p-4 md:p-0">
     <div className="block  text-2xl md:hidden " >
     
     <i  className={state?'fas fa-bars':'fas fa-times'} onClick={()=>setstate(!state)}></i>   
     </div>
       <img src="./images/zomatologo.jpg" className="h-7 "/>
       <div className= "  hidden     lg:w-1/2 my-2 mx-6 border h-14 p-2 md:flex items-center rounded-md border-search-border  shadow-border-shadow shadow-2xl">
           <div className="lg:w-2/5   flex items-center ">
           <i className="fas fa-map-marker-alt text-zomato-rgba mr-2 text-xl"></i>
           <input type="text" placeholder="Bengaluru" className="w-5/6 focus:outline-none "/>
           <i className="fas fa-caret-down text-gray-600"></i>
           </div>
           <div className="w-0.5 h-5 bg-line-color" ></div>
           <div className="lg:w-3/5 ">
           <i className="fas fa-search text-logo-color text-xl mx-2"></i>
           <input type="text" placeholder="Search for restaurent, cuisine or a dish" className="lg:w-5/6 focus:outline-none"/>
           </div>
       </div>
       <div  className={state ?(" text-xl font-light text-font-color  lg:w-2/12   bg-white   -700 fixed top-16  -right-full w-full h-1/2  md:static") :("   text-xl font-light  h-1/2 text-font-color  lg:w-2/12   bg-white fixed top-16  -right-0 w-full  md:static")} >
           <ul className="md:flex justify-around   " >
               <li className="my-10 pl-8 md:my-0  md:pl-0">
                   <a href="#" className="cursor-pointer  hover:text-gray-900  " >Log in</a>
                   
               </li>
               <li className="my-10 pl-8 md:my-0  md:pl-0">
               <a href="#" className="cursor-pointer  hover:text-gray-900   ">Sign up</a>
               </li>
           </ul>
       </div>

     
      </div>
      </>
      );
};

export default Navbar;
