import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "../../Pages/HomePage/Home.css"

const TotalEmployee = () => {
  const series = [49, 55, 23];

  const options = {
    chart: {
      type: 'pie',
    },
    colors: ['#254336', '#6B8A7A', "#B7B597"],
    labels: ['Male', 'Female', 'Others'],

    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      offsetY: 10,
      labels: {
        colors: ['#263238'],
        useSeriesColors: true,
        fontSize: '14px',
        fontFamily: 'roboto',
        fontWeight: 'bold'
      },
      markers: {
        width: 10,
        height: 10,
        radius: 12,
        offsetX: -2,
        offsetY: 0
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          offsetX: 10,
        }
      },
    }]
  };

  return (
    <div id="chart" className='border-2 rounded-md h-full flex items-center justify-center flex-col sm:block'>
      <p className='text-gray-700 font-roboto font-semibold text-left mx-5 my-5 text-lg flex flex-col sm:flex-row items-center justify-between'>
        <p>Total Employees</p>
        <p>100 Employees</p>
        </p>
      <ReactApexChart options={options} series={series} type="pie" height={300} className="my-5" />
    </div>
  );
};

export default TotalEmployee;
