import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  
} from 'react-simple-maps';


const WorldMap = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        // rotate: [-10.0, -52.0, 0],
        rotate: [-90, -25, 10],
        center: [-5, -1],
        scale: 1000,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Geographies
        geography="/features.json"
        // fill="#874f41"
        fill="#1a1c25"
        stroke="#c5c6c7"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[77, 14]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: '#fbe9d0',
          strokeWidth: 2,
          strokeLinecap: 'round',
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fbe9d0">
          {'Bangalore'}
        </text>
      </Annotation>
      <Annotation
        subject={[77, 14]}
        dx={-50}
        dy={-50}
        connectorProps={{
          stroke: '#fbe9d0',
          strokeWidth: 2,
          strokeLinecap: 'round',
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fbe9d0">
          {'I am here'}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default WorldMap;
