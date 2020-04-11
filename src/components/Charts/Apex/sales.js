import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function Apex() {
  const [options] = useState({
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
        },
      },
    },
    colors: ['#626ed4', '#02a499', '#f8b425'],
  });

  const [series] = useState([54, 28, 17]);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      height="220"
    />
  );
}
