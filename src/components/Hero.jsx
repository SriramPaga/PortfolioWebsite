import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { TypeAnimation } from 'react-type-animation';
import Cube from './Cube';
// 2c3531, 116466 d9b08c ffcb9a d1e8e2

// bg - 0e0a3c, 07456e, 009e9d, ceffea
const Section = styled.div`
  height: 100vh;
  /* background-color: #244855; */
  background-color: #1a1c25;
  /* background: linear-gradient(
    180deg,
    rgba(0, 169, 242, 1) 0%,
    rgba(11, 109, 201, 1) 30%,
    rgba(23, 45, 157, 1) 100%
  ); */

  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 760px) {
    height: 100vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 760px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
// const Left = styled.div`
//   flex: 2;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 20px;
//   @media only screen and (max-width: 760px) {
//     flex: 1;
//     align-items: center;
//   }
// `;
// const Right = styled.div`
//   flex: 3;
//   position: relative;
//   @media only screen and (max-width: 760px) {
//     flex: 1;
//     width: 100%;
//   }
// `;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: relative;
  @media only screen and (max-width: 760px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 760px) {
    /* align-items: center;
    text-align: center; */
    display: none;
  }
`;

const Title = styled.h1`
  color: #66fcf1;
  font-size: 74px;
  margin: 0;

  @media only screen and (max-width: 760px) {
    text-align: center;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
`;
const Line = styled.img`
  height: 16px;
  margin: 0;
`;
const Subtitle = styled.h2`
  font-size: 32px;
  color: #CDBFEE;
  /* color: #d9b08c; */
  margin: 0;
`;
const Description = styled.p`
  font-size: 24px;
  color: lightgray;
  margin: 0;
  @media only screen and (max-width: 760px) {
    font-size: 12px;

    padding: 20px;
    text-align: center;
  }
`;
const Button = styled.button`
  width: 150px;
  padding: 10px;
  /* background-color: #e64833; */
  background-color: #087E8B;
  color: #fdfdfd;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 0;
`;

const Img = styled.img`
  width: 400px;
  height: 800px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 760px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section id="HeroSection">
      <Navbar />
      <Container>
        <Left>
          <Title>Sriram Paga</Title>
          <WhatWeDo>
            <Line src="./Images/line2.png" />
            <Subtitle>
              {' '}
              <TypeAnimation
                className="maskedType"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'React Developer',
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Animator',
                  2000,
                ]}
                cursor={true}
                wrapper="span"
                speed={30}
                style={
                  {
                    // display: 'inline-block',
                    // alignSelf: 'center',
                    // fontSize: '5rem',
                    // color: 'white',
                    // textAlign: 'center',
                  }
                }
                repeat={Infinity}
                deletionSpeed={30}
              />
            </Subtitle>
          </WhatWeDo>
          <Description>Code by Day, Animate by Night !</Description>
          <a href="#AboutSection">
            {' '}
            <Button>Deep Dive</Button>{' '}
          </a>
        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={2} />
            <directionalLight position={[7, 2, 5]} intensity={3} />
            <Cube />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
