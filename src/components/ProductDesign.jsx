import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Stage } from '@react-three/drei';
import Keyboard from './Keyboard';

const ProductDesign = () => {
  return (
    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
      <Stage environment={'city'} intensity={0.6}>
        <Keyboard scale={0.5} />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default ProductDesign;
