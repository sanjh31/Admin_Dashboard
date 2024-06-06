import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "../../Pages/HomePage/Home.css"

const EmployeeInfoGraph = () => {
  const data = [
    { Month: "Mar", Available: 9 },
    { Month: "Apr", Available: 10 },
    { Month: "May", Available: 13 },
    { Month: "Jun", Available: 15 },
    { Month: "Jul", Available: 20 },
    { Month: "Aug", Available: 26 },
    { Month: "Sep", Available: 31 },
    { Month: "Oct", Available: 40 },
    { Month: "Nov", Available: 42 },
    { Month: "Dec", Available: 45 },
  ];

  const seriesData = data.map(e => e.Available);
  const categories = data.map(e => e.Month);

  const series = [{
    name: "Availability",
    data: seriesData
  }];

  const options = {
    chart: {
      type: 'area',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        opacity: 0.2
      },
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      }
    },
    colors: ['#34a853', '#545454'],  
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3' , 'transparent'],
        opacity: 0.5
      },
      column: {
        colors: ['#f3f3f3', 'transparent'], 
        opacity: 0.5
      }
    },
    markers: {
      size: 5
    },
    xaxis: {
      categories: categories,
      title: {
        text: 'Month',
        style: {
          fontSize: '16px',
          fontWeight: 'semibold',
          fontFamily: 'Roboto',
          color: '#263238',
        },
      }
    },
    yaxis: {
      title: {
        text: 'No. of Available Employees',
        style: {
          fontSize: '16px',
          fontWeight: 'semibold',
          fontFamily: 'Roboto',
          color: '#263238',
        },
        offsetY: -25,
        offsetX: -5
      },

      min: 0,
      max: 50
    },

  };

  return (
    <div className=' rounded-md border-2 overflow-x-hidden h-full flex items-center justify-center flex-col'>
      <p className='text-gray-700 font-roboto font-semibold text-left mx-5 mt-4 md:mt-5 mb-3 text-lg' >Employees Availability</p>
      
      <div className='mx-4 md:mx-4 sm:m-0 h-full w-full overflow-x-hidden  '>
        <ReactApexChart options={options} series={series} type="area" height={450}   className="linebargraph"/>
      </div>

    </div>
  );
};

export default EmployeeInfoGraph;
