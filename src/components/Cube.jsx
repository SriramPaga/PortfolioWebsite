import React, { useRef } from 'react';
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1)
  );

  // const colorMap = useLoader(TextureLoader, 'logo.png');

  return (
    <mesh>
      <boxGeometry />
      <meshLambertMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />

          <color attach="background" args={['#1f2833']} />
          <Text ref={textRef} fontSize={1} color="#CDBFEE">
            HELLO!
          </Text>
        </RenderTexture>
      </meshLambertMaterial>
    </mesh>
  );
};

export default Cube;
