import React from 'react';

import { styled } from 'styled-components';

const Card = styled.div`
  /* background-color: #fff; */
  border-radius: 4px;
  box-shadow: 0 8px 10px rgba(253, 253, 253, 0.1);
  margin: 1rem;
  padding: 0.5rem;
  height: 300px;
  width: 300px;
  color: black;
  display: flex;
  flex-direction: column;
  &:hover {
    transition: ease-in-out 200ms;
    scale: 1.1;
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

const CardTitle = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #087e8b;
  text-transform: capitalize;
`;
const CardDescription = styled.div`
  margin-bottom: 1rem;
  color: #c5c6c7;
`;

const CardImg = styled.div`
  max-height: 50%;
`;

const Img = styled.img`
  filter: grayscale(80%);
  /* max-width: 50px; */
  /* height: 100%; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 4px;
  @media only screen and (max-width: 760px) {
    /* max-width: 40px; */
    width: 100%;
    height: 100%;
  }
`;
const Link = styled.a`
  /* text-decoration: none; */
  color: inherit;
`;
function ProjectsCard(props) {
  const cardData = props.cardData;
  return (
    <Card>
      <CardImg>
        <Img src={cardData.img} alt="cardImg" />
      </CardImg>
      <CardTitle>
        <Link href={cardData.link} target="_blank">
          {cardData.title}
        </Link>
      </CardTitle>
      <CardDescription>{cardData.description}</CardDescription>
    </Card>
  );
}

export default ProjectsCard;
