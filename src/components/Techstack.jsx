import React from 'react';
import AnimationStack from './AnimationStack';
import DeveloperStack from './DeveloperStack';

import { styled } from 'styled-components';

// import 'bootstrap/dist/css/bootstrap.min.css';

// import Wave from '../../public/Images/StackImages/Wave.svg';
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

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 20px;
  position: relative;
  padding: 15px;
  /* border: 1px solid white; */
  @media only screen and (max-width: 760px) {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  position: relative;
  padding: 15px;
  @media only screen and (max-width: 760px) {
    width: 100%;
    flex: 5;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
`;

const Subtitle = styled.h2`
  color: #cdbfee;
  margin-bottom: 50px;
  margin-top: 150px;
  @media only screen and (max-width: 760px) {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

function Techstack() {
  return (
    <Section id="TechStack">
      <Container>
        <Left>
          <Subtitle>Animation Stack</Subtitle>
          <AnimationStack />
        </Left>
        <Right>
          <Subtitle>Development Stack</Subtitle>
          <DeveloperStack />
        </Right>
      </Container>
      {/* <Wave /> */}
    </Section>
  );
}

export default Techstack;
