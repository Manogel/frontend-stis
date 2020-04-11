import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function Apex() {
  const [options] = useState({
    colors: ['#f0f1f4', '#3c4ccf', '#02a499'],
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });

  const [series] = useState([12, 30, 20]);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      height="285"
    />
  );
}
