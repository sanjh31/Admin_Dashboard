import React from 'react'
import { MdAttachMoney } from "react-icons/md";
import { TbTransfer } from "react-icons/tb";
import jobtransfer from "../../assets/Media/job-transfer.png"
import ProjectOverview from "../../assets/Media/Project-Overview.png"
import SalaryOverview from "../../assets/Media/Salary_overview.png"
import { PiFilesFill } from "react-icons/pi";


const ApplicationComponent = () => {
  return (
        <>

        {/* Application of salary  , job, Project overview */}
        <div className=' grid gap-2'>

          {/* Salary OVerview */}
        <div className='Job-posting my-0.5  flex items-center justify-between  rounded-md p-3 ' style={{backgroundImage: 'linear-gradient(90deg, #B7B597 10%, #6B8A7A 100% )'}}>
        <div >
            <div className='text-2xl  p-2 rounded-full bg-morelight inline-block mb-2'>
            <MdAttachMoney className=' text-3xl  text-gray-800 '/> 
            </div>
            <p className='font-roboto font-semibold text-lg text-gray-800  tracking-wide'>Salary Overview</p>
            <button className='py-0.5 px-2 bg-orange-800 text-morelight rounded-md  my-1 text-sm '>More + </button>
        </div>

        <div className='image-job-posting w-40' >
        <img src={SalaryOverview} alt="" />
        </div>
        
        </div>

      {/* Job Posting */}
        <div className='Job-posting my-0.5 rounded-md flex items-center justify-between  p-3 bg-MainColor' style={{backgroundImage: 'linear-gradient(90deg, #B7B597 10%, #6B8A7A 100% )'}}>
        <div >
        <div className='text-2xl  p-2 rounded-full bg-morelight inline-block mb-2'>
        <TbTransfer className=' text-3xl  text-gray-800 '/> 
        </div>
        <p className='font-roboto font-semibold text-lg text-gray-800  tracking-wide'>Job Posting</p>
        <button className='py-0.5 px-2 bg-orange-800 text-morelight text-sm my-1  rounded-sm '>More + </button>
        </div>

        <div className='image-job-posting w-40'>
        <img src={jobtransfer} alt="" />
        </div>
        
        </div>


      {/* Projects-overview */}
        <div className='Job-posting my-0.5 rounded-md flex items-center justify-between  p-3' style={{backgroundImage: 'linear-gradient(90deg, #B7B597 10%, #6B8A7A 100% )'}}>
        <div >
        <div className='text-2xl  p-2 rounded-full bg-morelight inline-block mb-2'>
        <PiFilesFill className=' text-3xl  text-gray-800 '/> 
        </div>
        <p className='font-roboto font-semibold text-lg text-gray-800  tracking-wide'>Projects Overview</p>
        <button className='py-0.5 px-2 bg-orange-800 text-morelight text-sm my-1  rounded-sm '>More + </button>
        </div>
        <div className='image-job-posting w-32'>
        <img src={ProjectOverview} alt="" />
        </div>
        
        </div>
        </div>
        </>
  
  )
}

export default ApplicationComponent