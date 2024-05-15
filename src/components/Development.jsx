import React from 'react'
import ReactLogo from './ReactLogo'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Stage } from '@react-three/drei'
const Development = () => {
  return (
    <Canvas >
    <Stage environment={'city'} intensity={0.6}>
      <ReactLogo />
    </Stage>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
  </Canvas>
  )
}

export default Development