import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "../../Pages/HomePage/Home.css"



const TopHiringSource = () => {


  const series = [{
    name: 'Quality Assurance',
    data: [10, 55, 41, 37, 22, 43]
  }, {
    name: 'Web Development',
    data: [12, 32, 33, 52, 13, 43]
  }, {
    name: 'UI/ UX Designer',
    data: [15, 17, 11, 9, 15, 11]
  }, {
    name: 'App Development',
    data: [10, 7, 5, 8, 6, 9]
  }]


  
  const options =  {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true,
    
      }
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        formatter: function (val) {
          return val
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'left',
      offsetX: 0
    },

    colors: ['#254336', '#6B8A7A', '#B7B597', '#DAD3BE'] 
  }



  return (
  <>
  <div className=' rounded-md border-2 overflow-hidden h-full flex items-center justify-center flex-col'>
      <p className='text-gray-700 font-roboto font-semibold text-left  mt-4 md:mt-5 mb-0 text-lg' >Top Hiring Sources</p>
      <div className=' h-full w-full overflow-x-hidden '>
        <ReactApexChart options={options} series={series} type="bar" height={450} className="linebargraph"/>
      </div>
    </div>
    </>
  );
};

export default TopHiringSource;
