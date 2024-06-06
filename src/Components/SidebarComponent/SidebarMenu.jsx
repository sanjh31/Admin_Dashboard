import React, { useState } from 'react';
import "./Sidebar.css"
import { MdOutlineDashboard } from "react-icons/md";
import { TiTicket } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { IoIosCalculator } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { GrAppsRounded } from "react-icons/gr";
import { PiFileCodeBold } from "react-icons/pi";
import { MdArrowDropDown } from "react-icons/md";
import { motion } from 'framer-motion';


const SidebarMenu = ({isOpen , handleClose}) => {

const [isshow, setIsshow] = useState(false);

// Define the menu data within the same file
const menuData = [
    {
        title: 'Dashboard',
        icon : <MdOutlineDashboard/>,
        submenus: ['HR Dashboard', 'Project Dashboard']
    },
    {
        title: 'Projects',
        icon: <PiFileCodeBold/>,
        submenus: ['Monthly Report', 'Annual Report']
    },
    {
        title: 'Tickets',
        icon: <TiTicket />,
        submenus: ['Profile Settings', 'System Settings']
    },
    {
        title: 'Our Clients',
        icon: <FaRegUser/>,
        submenus: ['Client', 'Client Profile']
    },
    {
        title: 'Employees',
        icon: <TbUsers />,
        submenus: ['Member', 'Members Profile' , "Holidays" , "Attendance Employees" , "Attendence" , "Leave Request"]
    },
    {
        title: 'Accounts',
        icon: <IoIosCalculator/>,
        submenus: ['Invoices', 'Payments' ,  "Expenses" , "Create Invoices"]
    },
    {
        title: 'Payroll',
        icon: <MdOutlinePayments/>,
        submenus: ['Employee Salary']
    },
    {
        title: 'App',
        icon: <GrAppsRounded/>,
        submenus: ['Calender', 'Chat App']
    },
    // Add more menu items as needed
];

const handleSubmenuClick = () => {
    handleClose();
  };

const toggleFunction = (index) => {
    setIsshow(prevState => prevState === index ? !prevState : index);
};

  return (
    <div className="menubar  border-none">
    <ul>
        {/*  Iteration of Menus*/}
        {menuData.map((menu, index) => (
            <li key={index} className={`menu-item  ${isOpen ? 'block' : 'none' }  `}>

                <div onClick={() => toggleFunction(index)} className='flex items-center justify-between '>
                    <div className='flex items-center'>
                    <p className={`menu-icons me-3  ${isOpen? "text-2xl" : "text-xl"} text-Green font-medium`}>{menu.icon}</p>
                    <h1 className={`menu-list-title text-morelight font-roboto font-medium ${isOpen ? 'open' : '' }`}>{menu.title}</h1>
                    </div>
                     <MdArrowDropDown className={`text-Green  ${isOpen? "block" : "none"}`}/>
                    </div>


                    {/* Iteration of Submenu */}
                <div >
                <ul onClick={handleSubmenuClick} className={`submenu ${isshow === index ? 'show' : ''}  ${isOpen ? 'open' : '' }  w-full`} >
                    {menu.submenus.map((submenu, subIndex) => (
                        <li key={subIndex} className='font-roboto submenu-list text-morelight font-medium'>{submenu}</li>
                    ))}
                </ul>
                </div>
            </li>
        ))}
    </ul>
</div>
  )
}

export default SidebarMenu