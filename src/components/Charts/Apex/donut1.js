import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function Apex() {
  const [options] = useState({
    plotOptions: {
      radialBar: {
        hollow: {
          size: '45%',
        },
        dataLabels: {
          value: {
            show: false,
          },
        },
      },
    },
    colors: ['rgb(2, 164, 153)'],
    labels: [''],
  });

  const [series] = useState([60]);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height="143"
    />
  );
}
