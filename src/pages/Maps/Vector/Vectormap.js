import React from 'react';
import { VectorMap } from 'react-jvectormap';
import './jquery-jvectormap.css';

export default function Vector({ width, color, value }) {
  return (
    <div style={{ width, height: 500 }}>
      <VectorMap
        map={value}
        backgroundColor="transparent"
        containerStyle={{
          width: '100%',
          height: '80%',
        }}
        regionStyle={{
          initial: {
            fill: color,
            stroke: 'none',
            'stroke-width': 0,
            'stroke-opacity': 0,
          },
          hover: {
            'fill-opacity': 0.8,
            cursor: 'pointer',
          },
          selected: {
            fill: '#2938bc', // what colour clicked country will be
          },
          selectedHover: {},
        }}
        containerClassName="map"
      />
    </div>
  );
}
