import React from 'react';

import Navbar from './Navbar';

import { Canvas } from '@react-three/fiber';
import { styled } from 'styled-components';
import Cube from './Cube';

import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
const Section = styled.div`
  /* background-color: #90aead; */
  /* background-color: #244855; */
  background-color: #1a1c25;

  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 760px) {
    height: 200vh;
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

const Left = styled.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 760px) {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: relative;
  padding: 15px;
  @media only screen and (max-width: 760px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

const Title = styled.h1`
  color: #c5c6c7;
  font-size: 74px;
  margin: 0;
  font-family: 'Poppins';
  @media only screen and (max-width: 760px) {
    font-size: 55px;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
`;
const Line = styled.img`
  /* height: 5px; */
  height: 16px;
  margin: 0;
`;
const Subtitle = styled.h2`
  color: #cdbfee;
  margin: 0;
`;
const Description = styled.p`
  font-size: 24px;
  /* color: #874f41; */
  color: #c5c6c7;
  margin: 0;
  text-align: justify;
  @media only screen and (max-width: 760px) {
    font-size: 18px;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.button`
  width: 150px;
  padding: 10px;
  /* background-color: #d62246; */
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 0;
  &:hover {
    transition: ease-in-out 0.5s;
    background-color: ${(props) => props.hoverColor};
  }
`;

const ButtonLink = styled.a`
  text-decoration: none;
`;

const Img = styled.img`
  /* mix-blend-mode: darken; */
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
  clip-path: circle(30%);
  @media only screen and (max-width: 760px) {
    width: 300px;
    height: 300px;
    clip-path: circle(45%);
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Who = () => {
  return (
    <Section id="AboutSection">
      <Container>
        <Left>
          <Canvas>
            {/* <OrbitControls enableZoom={false} /> */}
            <ambientLight intensity={1} />
            <directionalLight position={[7, 0, 5]} intensity={2} />

            <Sphere args={[1, 100, 200]} scale={1.8}>
              <MeshDistortMaterial
                // color={'#d9b08c'}
                color={'#ceffea'}
                attach={'material'}
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./Images/DP.png" />
        </Left>
        <Right>
          <Title>Me in a Nutshell</Title>
          <WhatWeDo>
            <Line src="./Images/line2.png" />
            <Subtitle>What i do</Subtitle>
          </WhatWeDo>
          <Description>
            Hi, I'm a React developer and animator with a passion for creating
            engaging and interactive web experiences. I have a strong
            understanding of React's core concepts and libraries, as well as
            experience with a variety of animation tools and techniques. I'm
            excited to use my skills to help businesses of all sizes create
            websites that are both visually stunning and user-friendly.
          </Description>
          <BtnContainer>
            <ButtonLink
              href="https://drive.google.com/file/d/17JRJlfdAy-2ya_XOEO_BhYGhbkDs-vrZ/view?usp=sharing"
              target="_blank"
            >
              <Button color="#d62246" hoverColor="#931909">
                {' '}
                Check Resume
              </Button>
            </ButtonLink>
            {/* <ButtonLink href="#projects">
              <Button color="#087E8B" hoverColor="#06565f">
                {' '}
                Check Works
              </Button>
            </ButtonLink> */}
          </BtnContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
