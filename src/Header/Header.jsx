import React from "react";
import List from "./List";
import Nav from "./Nav";
import Navbar from "./Navbar";
import ThirdSection from "./ThirdSection";

const Header = () => {
  return (
    <>
      <div className="bg-white h-auto border-b-2">
        <div>
          <Navbar />
        </div>
        <div className="w-full flex justify-center">
          <List />
        </div>
        <div className="flex justify-center w-full overflow-y-auto">
          <ThirdSection />
        </div>
      </div>
      <div className="flex justify-center  sticky top-0   bg-white z-10 pt-2 pl-2   md:pt-0 md:pl-0">
      <div className="flex  md:w-4/5 w-full  flex-wrap pt-2">
        <Nav title="Filters"  img="fas fa-sort text-font-color"/>
        <Nav title="Delivery Time" />
        <Nav title="Pure Veg"  />
        <Nav title="Rating: 4.0+"  img="fas fa-sort text-font-color"/>
        <Nav title="Great Offers" />
        <Nav title="Cuisines"  />
        
        
        </div>
      </div>
    </>
  );
};  

export default Header;
