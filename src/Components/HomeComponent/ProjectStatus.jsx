import React from 'react'
import "../../Pages/HomePage/Home.css"
import { PiArrowUpBold } from "react-icons/pi";
import { HiMiniFolder } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";


const ProjectStatus = () => {

const data = [
    {
        title: "Project",
        icon: <HiMiniFolder/>,
        Task: "1250",
        Percent : "24.7%",
        gradientColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    },
    {
        title: "New Employee",
        icon : <FaUsers/>,
        Task: "213",
        Percent : "5.8%",
        gradientColor: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
    },
    {
        title: "Running Task",
        icon: <FaTasks/>,
        Task: "10,225",
        Percent : "16.7%",
        gradientColor: "linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)"
    },
    {
        title: "Earning",
        icon : <RiMoneyDollarCircleFill/>,
        Task: "$2,658",
        Percent : "4.7%",
        gradientColor: "linear-gradient(45deg,  #FF9800 30%, #FFC107 90%)"
    },
]




  return (
    <>
       <div className='grid lg:grid-cols-4 sm:grid-cols-2 w-full gap-x-2 gap-y-2  ' > 

       {/* Iteration of Project status  */}
   {data && data.map((item, index)=>{
    return(
        <div key={index} className=' rounded p-3' style={{ background: item.gradientColor,}}>

        <div className='title text-white font-roboto text-lg font-bold flex items-start justify-between'>
        <p>{item.title}</p>
        <p className='text-6xl text-morelightrgba '>{item.icon}</p>
        </div>
       
        <div className='flex items-start justify-between '>
          <div className='present text-white text-xl  font-bold font-roboto'>
             <p>{item.Task}</p>
             <input type="range" min="0" max="100" className="w-full range-field"/>
          </div>
          <div className='flex items-center font-medium'>
            <p className='font-semibold text-white'>{item.Percent}</p> 
            <p ><PiArrowUpBold className='ms-1 text-white text-sm font-bold'/></p>
           </div>
         </div>
         </div>
    )
   })

   }

    </div>

   </>
  )
}

export default ProjectStatus