import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function Apex() {
  const [options] = useState({
    colors: ['#ccc', '#3c4ccf', '#02a499'],
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    grid: {
      borderColor: '#f8f8fa',
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  });

  const [series] = useState([
    {
      name: 'Activated',
      data: [50, 130, 80, 70, 180, 105, 250],
    },
    {
      name: 'Pending',
      data: [80, 100, 60, 200, 140, 100, 150],
    },
    {
      name: 'Deactivated',
      data: [20, 80, 70, 140, 150, 80, 200],
    },
  ]);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height="290"
    />
  );
}
