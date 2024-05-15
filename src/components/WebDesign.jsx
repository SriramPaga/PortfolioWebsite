import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
// import WebDev from Model
import WebDevModel from './WebDev';
import styled from 'styled-components';
const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 760px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment={'city'} intensity={0.6}>
          <WebDevModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <Desc>
        Bringing ideas to life! Skilled animator with a passion for creating
        engaging visuals.
      </Desc>
    </>
  );
};

export default WebDesign;
