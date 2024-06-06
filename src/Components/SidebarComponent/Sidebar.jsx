// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { motion } from "framer-motion";
import Employee8F from "../../assets/Media/Employee-5F.png";
import SidebarMenu from './SidebarMenu';
import { FaDice } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <motion.div
      className={`sidebar-container bg-MainColor  hidden md:flex items-center flex-col  ${isSidebarOpen ? 'open' : ''}`}
    >
{/* Logo */}
    <div className={`logo-name-desktop md:flex items-center hidden   ${isSidebarOpen ? 'open' : ''}`}>
    <div ><FaDice className={`text-morelight logo ${isSidebarOpen ? 'open' : ''}`}/></div>
    <div className={`name font-Cardo text-Green text-xl font-bold ${isSidebarOpen ? 'open' : ''}`}>EVERGREEN</div>
    </div>



{/* SIDEBAR USER DETAIL AND SIDEBAR MENU */}
      <div className={`sidebar-image-menu-content w-full ${isSidebarOpen ? 'open' : ''} `}>

      {/* This is User-Image && Name and Emamil */}
        <div className={`user-image-info flex flex-col items-center justify-center ${isSidebarOpen ? 'open' : ''} `}>
          <div className={`user-image ${isSidebarOpen ? 'open' : ''}`}>
            <img src={Employee8F} alt="User" className={`${isSidebarOpen ? 'open' : ''}`}/>
          </div>
          <div className={`user-name mx-2 text-center ${isSidebarOpen ? 'open' : ''}`}>
            <h1 className='text-morelight font-roboto font-medium text-sm '>Hey, Priya Singh</h1>
            <p className='text-morelight font-roboto font-medium text-sm '>Priya137@gmail.com</p>
          </div>
        </div>

        {/* SidebarMenu */}
        <div>
          <SidebarMenu isOpen={isSidebarOpen}  />
        </div>
        
      </div>   {/*End of SIDEBAR USERDETAIL AND SIDEBAR MENU */}
    </motion.div>
  );
};

export default Sidebar;
