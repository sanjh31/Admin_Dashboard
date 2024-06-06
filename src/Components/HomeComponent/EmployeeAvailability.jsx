import React from 'react'
import { PiUserCheckFill , PiTimerFill , PiUserMinusFill, PiCalendarDotsFill} from "react-icons/pi";


const EmployeeAvailability = () => {

    const data = [
        {
          icon: <PiUserCheckFill />,
          title: "Attendance",
          Number: "407",
          description: "Total number of present employees."
        },
        {
          icon: <PiTimerFill />,
          title: "Late Coming",
          Number: "7",
          description: "Number of employees who came late."
        },
        {
          icon: <PiUserMinusFill />,
          title: "Absent",
          Number: "5",
          description: "Number of absent employees."
        },
        {
          icon: <PiCalendarDotsFill />,
          title: "Leave Apply",
          Number: "20",
          description: "Number of leave applications."
        }
      ];




  return (
    <>
      <div className='w-full h-full border-2  rounded-md my-auto'>

        {/* TITLE */}
        <div className='Title ps-4 pt-4 '>
        <p className='text-lg sm:font-bold font-semibold  text-gray-700 font-roboto'>Employees Availability</p>
        </div>


        {/* Iteration of Arrays */}
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-2 sm:p-4 p-2  '>
          {data && data.map((item, index) => {
            return (
              <div className='border bg-stone-100 rounded p-4  hover:shadow-lg transition-shadow duration-300' key={index}> 
                  <div className='flex items-start justify-between'>
                      <div>
                        <div className='title text-gray-700 font-roboto text-md  sm:text-lg font-medium sm:font-bold'>{item.title}</div>
                        <div className='present text-gray-700  text-lg sm:text-xl  font-bold font-roboto'>{item.Number}</div>
                      </div>

                      <div>
                        <div className='icon text-4xl sm:text-3xl text-Green'>{item.icon}</div>
                      </div>
                </div>

              <button className='mt-4 py-1 px-1 text-xs font-medium text-white rounded bg-MainColor hover:bg-MainColor'>View More</button>
        </div>
      );
    })
}
</div>
     
</div>
</>)

};
export default EmployeeAvailability
