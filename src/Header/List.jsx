import React from 'react'

const List = () => {
    return (
        <div className='md:w-4/5   w-full my-4  '>
          <ul className=' md:flex  px-4 md:px-0'>
              <li className='text-logo-color text-sm    p-2 md:p-0 border-b md:border-0 '><a href="#" >Home <span className='hidden md:inline px-1' >/</span></a></li>
              <li className='text-logo-color text-sm  p-2 md:p-0 border-b  md:border-0 ' ><a href="#">India <span className='px-1 hidden md:inline '>/</span></a></li>
              <h4 className='text-line-color text-sm px-2  p-2 md:p-0 ' >Bengaluru Restaurants</h4>
          </ul>

        </div>
    )
}

export default List

