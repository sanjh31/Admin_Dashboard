
import './App.css'
import Sidebar from './Components/SidebarComponent/Sidebar'
import { useState } from 'react'
import Home from "./Pages/HomePage/Home"
import Navbar from './Components/HeadbarComponent/Navbar'
import MobileresponsiveSidebar from './Components/SidebarComponent/MobileresponsiveSidebar'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [OpenMobileSidebar , setOpenMobileSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOpenMobileSidebar = () => {
    setOpenMobileSidebar(true);
  };
  
  const handleCloseMobileSidebar = () => {
    setOpenMobileSidebar(false);
  };

 

  return (
    <>

    {/* Here is the main container having property flex and 
    2 div
    first sidebar
    second one is of Navbar and Home
     */}
    <div className='main-container flex '>

  {/* sidebar Container */}
    <div className='sidebar m-0 p-0'>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}  />
      <MobileresponsiveSidebar handleCloseMobileSidebar={handleCloseMobileSidebar} OpenMobileSidebar={OpenMobileSidebar} />
    </div>

    {/* Navigation bar and pages */}
    <div className='Navbar-Pages '>
      <div className='Navbar m-0 p-0 bg-MainColor'>
        <Navbar isSidebarOpen={isSidebarOpen} 
              toggleSidebar={toggleSidebar} 
              handleOpenMobileSidebar={handleOpenMobileSidebar} OpenMobileSidebar={OpenMobileSidebar} />
      </div>

      {/* Home   Means all the another pages will also be here */}
      <div className='Pages p-2  m-0 '>
        <Home />
      </div>
    </div>
    </div>


    </>
  )
}

export default App
