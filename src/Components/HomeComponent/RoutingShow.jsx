import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const RoutingShow = () => {
  return (
    <div className='Path-Component flex items-center my-3'>
        <p className='border-r-2 pe-2 sm:pe-5 font-roboto text-base sm:text-xl text-gray-600 font-semibold border-gray-400'>Dashboard</p>
        <IoHome className='text-xl text-gray-600 ms-3 me-1'/>
        <IoIosArrowForward className='text-lg text-gray-600 mx-1' />
        <p className=' font-roboto font-medium text-gray-600  '>Home</p>
        <IoIosArrowForward className='text-lg text-gray-600 mx-1' />
        <p className=' font-roboto font-medium text-gray-600  '>Dashboard</p>
    </div>
  )
}

export default RoutingShow