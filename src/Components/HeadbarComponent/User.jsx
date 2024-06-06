import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const User = () => {

  const menuData = [
    {
        title: 'Profile',
        icon : <FaRegUserCircle/>,

    },
    {
        title: 'Inbox',
        icon: <MdOutlineForwardToInbox/>,

    },
    {
        title: 'Settings',
        icon: <IoSettingsOutline/>,

    },
    {
        title: 'Logout',
        icon: <TbLogout/>,

    },
    
];

return (
    <div  className='bg-morelight relative z-20' >

  {/* Iteration of User  Properties */}
    {menuData && menuData.map((menu,index)=>{
      return(
    <div className='flex items-center text-Green  hover:bg-MainColor ' key={index}>
    <div className='text-xl mx-2'> {menu.icon}</div>
    <a href="/settings" className="block px-2 py-2 text-gray-800 font-medium">{menu.title}</a>
    </div>
    )
    })
    }



</div>
  )
}

export default User