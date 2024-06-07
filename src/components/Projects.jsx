import React from 'react';

import { styled } from 'styled-components';
import ProjectsCard from './ProjectsCard';

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
  height: 90%;
  scroll-snap-align: center;
  /* width: 1400px; */
  /* display: flex; */
  /* justify-content: space-between; */
  @media only screen and (max-width: 760px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-template-rows: auto;
  /* justify-content: center; */
  /* align-items: center; */
  overflow: scroll;
  scrollbar-width: none;
  width: 100%;
  padding: 5px;
  @media only screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleContainer = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
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
const Description = styled.h6`
  color: #c5c6c7;
  font-size: 28px;
  margin: 1;
  font-family: 'Poppins';
  @media only screen and (max-width: 760px) {
    font-size: 55px;
  }
`;
const cardData = [
  {
    id: 1,
    title: 'itsFood',
    img: 'public/Images/Itsfoods.png',
    link: 'https://srirampaga.github.io/itsfood/',
    description:
      'A frontend project demonstratin CRUD operation without backend, using ReactJS and TailwindCSS',
  },
  {
    id: 2,
    title: 'Card Modal',
    img: 'public/Images/CardModal.png',
    link: ' http://52.15.131.99:3000/   ',
    description:
      'A small component showcasing how a modal can be created by only using HTML,CSS and JS',
  },
  // {
  //   id: 3,
  //   title: 'backend',
  //   description:
  //     'asdwasd asdwasd ad wasdw asdwa sdasdwasd asd asdwasd asd asdwsdas das dasdwdasdwa sdasdwasdwdadasdw',
  // },
  // {
  //   id: 4,
  //   title: 'frontend',
  //   description:
  //     'asdwasd asdwasd ad wasdw asdwa sdasdwasd asd asdwasd asd asdwsdas das dasdwdasdwa sdasdwasdwdadasdw',
  // },
];

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <TitleContainer>
          <Title>Projects</Title>
        </TitleContainer>
        <GridBox>
          {cardData.map((data, index) => {
            return (
              <GridItem>
                <ProjectsCard cardData={data} />
              </GridItem>
            );
          })}
        </GridBox>
      </Container>
      <Description>More Incoming ... ...</Description>
    </Section>
  );
}

export default Projects;
