// Navbar.js
import React from 'react';
import './Navbar.css';
import { IoIosNotifications } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoHelpCircleSharp } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { useState, useRef, useEffect } from 'react';
import Notification from "./Notification.jsx";
import User from './User';
import { FaDice } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoSearchCircleSharp } from "react-icons/io5";



const Navbar = ({ isSidebarOpen, toggleSidebar,handleOpenMobileSidebar }) => {
  // User
  const [DropdownOpen, setDropdownOpen] = useState(false);
  // Notification
  const [NotificationOpen, setNotificationOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);

  
  // ToggleDropdown for the User
  const toggleDropdown = ()=>{
  setDropdownOpen(!DropdownOpen)
  }

  // toggling for notification
const togglenotification = ()=>{
  setNotificationOpen(!NotificationOpen)
}


// HandleClickOutside
const handleClickOutside = (event) => {
  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setDropdownOpen(false);
  }
  if(notificationRef.current && !notificationRef.current.contains(event.target)){
    setNotificationOpen(false);
}

};

useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  return (
 <>
    <div className={`navigation-container  bg-MainColor ${isSidebarOpen ? 'open' : ''} flex items-center justify-between`}>


      {/* this is the logo for the MOBILE responsive  */}
      <div className='logo-mobile flex items-center md:hidden py-2'>
      <FaDice className={`text-morelight text-3xl mx-3`}/>
      <div className='searchbar flex items-center ms-2  bg-white rounded-full'>
      <input type="text" className='w-32 my-0.5 px-3 focus:outline-none rounded-full' placeholder='Search...'/>
      <IoSearchCircleSharp  className='text-green-600 text-3xl'/>
      </div>
      </div>


    {/* hamburger more than 768px of screen OR DESKTOP */}
      <div className='md:flex items-center hidden'>
      <div className='hamburger-laptop-responsive  md:block'>
      <button className={` sidebar-toggle ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
       <HiOutlineMenu className='text-2xl text-morelight font-bold' />
      </button>
      </div>
      
      <div className='searchbar flex items-center  bg-white rounded-full'>
      <input type="text" className='w-60 m-1 px-3 focus:outline-none rounded-full' placeholder='Search...'/>
      <IoSearchCircleSharp  className='text-green-600 text-4xl'/>
      </div>
      </div>

      {/* these are the notification and the user profile upto 768px of screen or DESKTOP */}
      <div className='RHS user and notification help flex items-center my-3  px-3 '>

         {/* NOTIFICATION AND DROPDOWN OF NOTIFICATION */}
         <div className='notification hidden md:block ' onClick={togglenotification} ref={notificationRef}>
            <div className='relative'>
            <IoIosNotifications className='text-morelight text-2xl '/>
            <span className=" bg-red-400 text-white font-semibold rounded-full px-1 py-0.25 absolute -top-2 -right-1  text-xs">3</span>
            </div>
            {NotificationOpen && (
            <div className="absolute right-2 top-10 mt-2 shadow-xl ">
            <Notification />
            </div>)
            }
          </div>

         {/* USER PROFILE NAVBAR */}
            <div className='user hidden md:flex items-center mx-5  rounded px-2 py-1 ' onClick={toggleDropdown} ref={dropdownRef}>
            <h1 className="font-semibold text-Green">Priya Singh</h1>
            <RiAccountCircleFill className='text-Green text-2xl mx-1'/>
            {DropdownOpen && (
            <div className="absolute right-0 top-10 mt-2 w-44 bg-morelight rounded shadow-xl py-2 ">
            < User  />
            </div>)
            }

            </div>

  
      </div>


      {/* this is the Hamburger for the MOBILE responsive  */}
      <div className={`block md:hidden py-2`} onClick={handleOpenMobileSidebar}>
  <HiMenuAlt1 className='text-morelight text-2xl mx-3'/>
</div>


</div>







{/* This is the Second navigation bar to make MOBILE responsive */}
      <div className='Mobile Responsive flex items-center justify-between py-1 bg-morelight md:hidden'>
        <div className='user  flex items-center mx-4 rounded py-1' onClick={toggleDropdown} ref={dropdownRef}>
          <RiAccountCircleFill className='text-Green text-2xl me-1' />
          <h1 className="font-semibold text-Green">Priya Singh</h1>
         
            {DropdownOpen && (
            <div className="absolute left-2 top-20 mt-2 w-44  rounded shadow-xl py-2 z-40" style={{boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.2)',}}>
            < User  />
            </div>)}
        </div>

        <div className='notification ' onClick={togglenotification} ref={notificationRef}>
            <div className='relative  flex items-center mx-4 rounded py-1'>
            <IoIosNotifications className='text-Green text-2xl '/>
            <span className=" bg-red-400 text-white font-semibold rounded-full px-1 py-0.25 absolute -top-2 -right-1  text-xs">3</span>
            </div>
            {NotificationOpen && (
            <div className="absolute right-2 top-10 mt-2 shadow-xl  z-20">
            <Notification />
            </div>)
            }
          </div>
      </div>
      </>

  );
};

export default Navbar;
