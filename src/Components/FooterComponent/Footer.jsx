import React from 'react'
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsBarChartLineFill } from "react-icons/bs";
import { FaArrowsAltH } from "react-icons/fa";
import "./Footer.css"
import { IoSettings } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='sm:hidden fixed bottom-0  w-full flex items-center justify-between footer'>
        <div className='text-2xl my-2 text-gray-700 transition-transform transform hover:rotate-180 hover:-translate-y-1 hover:text-white  ms-4'><MdAccountBalanceWallet/></div>
        <div className='text-2xl my-2 text-gray-700 transition-transform transform hover:rotate-12 hover:-translate-y-1 hover:text-white  '>< BsBarChartLineFill/></div>
        <div className='text-2xl my-2 text-gray-700 transition-transform transform hover:rotate-180 hover:-translate-y-1 hover:text-white  '>< FaArrowsAltH/></div>
        <div className='text-2xl my-2 text-gray-700 transition-transform transform hover:rotate-90 hover:-translate-y-1 hover:text-white  me-4'>< IoSettings/></div>
        
    </div>
  )
}

export default Footer
