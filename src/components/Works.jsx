import React, { useState } from 'react';
import styled from 'styled-components';
import WebDesign from './WebDesign';
import Development from './Development';
import ProductDesign from './ProductDesign';

const workList = [
  'Web Dev',
  // 'Development',
  '3d Design',
  'Animation',
  // 'Social Media',
];
const Section = styled.div`
  /* background-color: #244855; */
  background-color: #1a1c25;

  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 760px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 760px) {
    padding: 10px;
    max-height: 30%;
    
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media only screen and (max-width: 760px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &:after {
    content: '${(props) => props.text}';
    position: absolute;
    top: 0;
    left: 0;
    color: #75e2dd;
    /* color: #90aead; */
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    /* color:red; */
    &:after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
  margin-top: 0px;

  /* position: relative; */
`;

const Works = () => {
  const [work, setWork] = useState('Web Dev');
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {workList.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === 'Web Dev' ? (
            <Development />
          ) : work === 'Animation' ? (
            <WebDesign />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
