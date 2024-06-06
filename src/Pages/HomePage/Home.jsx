import React from 'react'
import EmployeeAvailability from '../../Components/HomeComponent/EmployeeAvailability'
import TopEmployers from '../../Components/HomeComponent/TopEmployers'
import ProjectStatus from '../../Components/HomeComponent/ProjectStatus'
import TotalEmployee from '../../Components/HomeComponent/TotalEmployee'
import EmployeeInfoGraph from '../../Components/HomeComponent/EmployeeInfoGraph'
import TopHiringSource from '../../Components/HomeComponent/TopHiringSource'
import "./Home.css"
import InterviewsComponent from '../../Components/HomeComponent/InterviewsComponent'
import ApplicationComponent from '../../Components/HomeComponent/ApplicationComponent'
import RoutingShow from '../../Components/HomeComponent/RoutingShow'


const Home = () => {
  return (
    <div>
    <RoutingShow />
    <ProjectStatus />


    <div className='grid employee-info-application-container mt-2 md:mt-4'>
    <EmployeeInfoGraph/>
    <ApplicationComponent/>
    </div>
    
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-2 md:mt-4'>
      <div><EmployeeAvailability /></div>
      <div><TotalEmployee/> </div>
    </div>
    
    <div className=' mt-2 md:mt-4 top-hiring-employee-interview-container'>
    <div><TopHiringSource/></div>
    <div><InterviewsComponent/></div>
    </div>
     
     
     <TopEmployers/>
    </div>
  )
}

export default Home