import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdOutlineWatchLater } from "react-icons/md";
import User1 from "../../assets/Media/User-1.jpg"
import "./Navbar.css"
import User3 from "../../assets/Media/User-3.jpg"


const Notification = () => {


const menudata = [
    {
   
        description : "Sunny Task Added Get Started.",
        Image : User1,
        time : "2 mins ago"

    },
    {
       
        description : "Today,  is John Doe's birthday !",
        Image : User3,
        time : "7 mins ago"

    },
    {
       
        description : "Sekhar review the task today at 3 p.m",
        Image : User3,
        time : "11 mins ago"

    },
    {
       
        description : "Team meeting tomorrow at 10:00 AM.",
        Image : User1,
        time : "14 mins ago"

    },
]



  return (
    <div className='w-full rounded-md bg-morelight mx-2 sm:mx-0 shadow-lg notification-container relative z-20' style={{boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.2)',}}>

        {/* Header of notificaiton */}
        <div className='header w-full bg-MainColor py-4 px-4 text-white font-semibold  rounded flex items-center justify-between'>
           <h1>Notification</h1> 
           <h1 className='font-medium'>Mark as Read</h1>
        </div>


        <div>
            {/* Iteration of notification */}
            {
                menudata && menudata.map((menu, index)=>{
                    return(
                        <div className='flex items-center justify-between notification-items py-3 w-full px-4 border-b-1' key={index}>
                        <div className="flex items-center ">
                        <div className='w-10 h-10   notification_user_image' >
                        <img src={menu.Image} alt="" className='bg-red-900 rounded-full'/>
                        </div>
                        <div className='text-sm ps-4 pe-10 '>
                            <h1 className="text-sm sm:text-base font-semibold">{menu.description}</h1>
                            <div className='flex items-center'>
                            <MdOutlineWatchLater/>
                            <p className="text-xs font-medium mx-1 ">{menu.time}</p>
                            </div>
                        </div>
                        </div>
            
                        <div>
                        <RxCross2 />
                        </div>
            
                    </div>
                    )
                })
            }
    </div>


</div>
  )
}

export default Notification