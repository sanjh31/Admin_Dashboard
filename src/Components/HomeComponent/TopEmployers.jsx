import React from 'react'
import Employee1 from "../../assets/Media/Employee-1M.png"
import Employee3 from "../../assets/Media/Employee-3M.png"
import Employee4 from "../../assets/Media/Employee-4M.png"
import Employee7 from "../../assets/Media/Employee-7F.png"
import Employee2 from "../../assets/Media/Employee-2M.png"
import { IoIosStar } from "react-icons/io";

const TopEmployers = () => {

    const data = [
        {
            Image: Employee1,
            name : "Aman Bisht",
            company : "@short",
            Performance : "80%"
        }
        ,
        {
            Image: Employee3,
            name : "Karan Shrii",
            company : "@Rees",
            Performance : "78%"
        },
        {
            Image: Employee4,
            name : "Simran Kaur",
            company : "@Par",
            Performance : "75%"
        },
        {
            Image: Employee7,
            name : "Aanya Arora",
            company : "@Eric",
            Performance : "70%"
        },
        {
            Image: Employee2,
            name : "Sarthak Roy",
            company : "@Ince",
            Performance : "69%"
        }

    ]





  return (
    <>
    <div className='TopEmployers-container mt-5 rounded  border-2 p-2 px-3 bg-morelight'>
        {/* TITLE */}
    <div className='title text-lg md:text-xl font-roboto font-medium text-gray-800'>Top Performers</div>
    <div className='content-cards flex lg:items-start xl:items-center flex-col lg:flex-row justify-between'>

    {/* THis is the text-content */}
    <div className='content me-10 mt-2 md:mt-10 xl:mt-0'>
    <p className='text-gray-700 text-medium md:text-lg font-medium'>You have 140 influencers in your company.</p>
    <div className='flex items-center justify-between lg:mt-10 my-5  sm:flex-row '>
    <div className='New-task-container'>
    <h1 className='text-gray-700 font-bold text-xl font-roboto'>350</h1>
    <p className='text-gray-700 font-medium font-roboto'>New Task</p>
    </div>
    <div className='completed-task-container'>
    <h1 className='text-gray-700 font-bold text-xl font-roboto'>130</h1>
    <p className='text-gray-700 font-medium font-roboto'>Task Completed</p>
    </div>
    </div>
    </div>

{/* Iteration of top employees */}
<div  className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-2 sm:gap-x-2  lg:gap-x-4'>
{
    data && data.map((item, index)=>{
        return(
            <div className='cards py-3 px-6 w-full rounded  flex flex-col items-center justify-center my-1 md:my-3 bg-white' key={index}>
            <div className='w-24 h-24 '>
            <img src={item.Image} alt="" className='rounded-full w-full h-full object-cover border-4 border-MainColorrgb p-0.5' />
            </div>
            <div className='mt-4 text-center'>
            <p className='font-roboto my-1 font-medium text-normal md:text-lg text-gray-700'>{item.name}</p>
            <p className='font-roboto my-1 font-medium text-sm text-gray-700'>{item.company}</p>
            <p className='font-roboto my-1 ms-1 font-bold text-xl md:text-2xl text-MainColor flex items-center justify-center'>{item.Performance} <IoIosStar className='text-yellow-500 text-lg ' /></p>
            </div>
            </div>
        )
    })
}
</div>
   
    </div>
    </div>
    </>
  )
}

export default TopEmployers