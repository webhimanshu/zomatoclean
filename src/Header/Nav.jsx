import React from 'react'

const Nav = ({title ,img}) => {
    return (
      <>
  {/* <div className='flex   md:w-4/5  w-full flex-wrap pl-8 md:pl-0 border-red-500 border' > 
       <div className="flex border-line-color border p-1 rounded items-center my-4 mr-6">
          <div>
          <i className={img}></i>
          </div>
          <div className="text-nav-font text-base mx-1">{title}</div>
          </div>

      
          </div> */}
 <div className='flex items-center border-line-color p-1 rounded-md  border    mx-2 md:my-6 my-3' >
<div>
<i className={img}></i>
</div>
<div className='text-nav-font text-base mx-1'>
{title}
</div>
 </div>
      </>
    )
}

export default Nav
