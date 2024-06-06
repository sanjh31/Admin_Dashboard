import React from 'react'
import { motion } from "framer-motion";
import SidebarMenu from './SidebarMenu';
import { FaDice } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./Sidebar.css"

const MobileresponsiveSidebar = ({OpenMobileSidebar, handleCloseMobileSidebar }) => {

  // TO MAKE MOBILE RESPONSIVE SIDEBAR
  return (
    <motion.div animate={{ height: OpenMobileSidebar ? '100vh' : 0 , width: OpenMobileSidebar ? "100%" : 0}} className={`mobileresponsive bg-MainColor ${OpenMobileSidebar ? 'reveal' : ''}`}>

{/* Cross button */}
    <div className={`absolute right-3 top-12 ${OpenMobileSidebar ?  "reveal" :""}`} animate={{ height: OpenMobileSidebar ? "0" : "100vh"}}  onClick={handleCloseMobileSidebar}>
        <ImCross className={`text-morelight text-xl mx-3`} />
    </div>

{/* Logo */}
    <div className={`logo-name-desktop flex items-center mt-10 ms-5`}>
    <div ><FaDice className={`text-morelight logo $`}/></div>
    <div className={`name font-Cardo text-Green text-xl font-bold `}>EVERGREEN</div>
    </div>

{/* MobileRespnsiveSidebar */}
        <div className='mobileresponsiveSidebar'>
          <SidebarMenu />
        </div>
      </motion.div>

  )
}

export default MobileresponsiveSidebar