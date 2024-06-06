import React from 'react'
import { FaUsers } from "react-icons/fa";
import { FaHireAHelper } from "react-icons/fa";
import Employee1 from "../../assets/Media/Employee-1M.png"
import Employee5 from "../../assets/Media/Employee-5F.png"
import Employee2 from "../../assets/Media/Employee-2M.png"
import Employee8 from "../../assets/Media/Employee-8F.png"


const InterviewsComponent = () => {

  const data =[
    {
      icon1 :<FaUsers/>,
      number: "213",
      title : "Interviews",

    },
    {
      icon1 :<FaHireAHelper/>,
      number: "100",
      title: "Hired",

    }
  ]



  const interviewCandidate = [
    {
      image : Employee1,
      name : "Neelansh",
      position : "Ui/Ux Developer",
      Date : "24-Jul-24",
      Timing : "10:00 am"
    },   
    {
      image : Employee8,
      name : "Sanjana Negi",
      Date: "24-jul-24",
      position : "Frontend Developer",
      Timing : "11:00 am"
    },
    
    {
      image : Employee5,
      name : "Deepika",
      position : "Figma Developer",
      Date : "25-jul-24",
      Timing : "10:00 am"
    },
    
    {
      image : Employee2,
      name : "Rahul Sharma",
      Date: "28-Jul-24",
      position : "Business Analyst",
      Timing : "10:30 am"
    },
    
    

  ]

  return (
  <>
  <div className='w-full h-full border-2 rounded-md p-1 '>

    {/* Iteration of Number of Interviews and hired candidates */}
  <div className='grid grid-cols-1 gap-y-2 sm:gap-y-0  sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-2'>
    {data && data.map((item,index)=>{
        return(
          <div className='interviews-hired p-2 border-2 lg:my-1 xl:my-0 rounded-md '>
          <div className='interviews flex items-center justify-between'>
   
          <div className='icon text-2xl text-Green p-2 rounded-full bg-morelight'>{item.icon1}</div>
          <div className='interivews-number text-right'>
            <p className='text-lg text-gray-800 font-roboto font-semibold '>{item.number}</p>
            <p className='text-lg text-gray-800 font-roboto font-semibold '>{item.title}</p>
          </div>
          </div>
          </div>
        )
      })}
      </div>

{/* Candidate for the interview */}

      <div className='grid grid-cols-1 gap-y-auto'>
        <p className='text-base text-gray-800 font-roboto font-medium  mt-5 mb-1 px-1' >Upcoming Interviews</p>

     {interviewCandidate && interviewCandidate.map((item, index)=>{
      return(
        <div className='candidate-image-content p-2 px-3 border-2 my-1 rounded-md flex items-center justify-between' key={index}>
        <div className='flex items-center '>
      <div className='rounded-full w-14  h-14'><img src={item.image} alt=""  className='w-full h-full rounded-full  object-cover border-2 border-gray-200 p-0.5 '/></div>
      <div className='name-post ms-3'>
        <p className='text-gray-800 font-medium font-roboto'>{item.name}</p>
        <p className='text-sm text-gray-700 font-medium font-roboto'>{item.position}</p>
      </div>

      </div>
      <div className='timing and date'>
        <p className='text-sm text-gray-700 font-medium font-roboto'>{item.Date}</p>
        <p className='text-sm text-gray-700 font-medium font-roboto'>{item.Timing}</p>
      </div>

      </div>

      )
     })

     }
</div>
  
        </div>

   </>

  )
}

export default InterviewsComponent