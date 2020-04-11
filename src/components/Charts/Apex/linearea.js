import React, { useState } from 'react';
import ChartistGraph from 'react-chartist';

export default function Apex() {
  const [labels] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const [series] = useState([[5, 9, 7, 8, 5, 3, 5, 4]]);

  return (
    <ChartistGraph
      data={{ labels, series }}
      style={{ height: '290px' }}
      options={{
        low: 0,
        showArea: true,
      }}
      type="Line"
    />
  );
}
