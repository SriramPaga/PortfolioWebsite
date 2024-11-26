import React, { useRef } from 'react';
import styled from 'styled-components';
//Below code section is to create styled components using Stled components library
const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    padding: 10px;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media only screen and (max-width: 760px) {
    display: flex;
    align-items: center;
    gap: 0px;
  }
`;
const Logo = styled.img`
  height: 60px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 760px) {
    display: flex;
    /* gap: 20px; */
    justify-content: start;
    align-items: flex-start;
    list-style: none;
  }
`;
const ListItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: large;
  scroll-behavior: smooth;
  @media only screen and (max-width: 760px) {
    font-size: x-small;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #D62246;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 760px) {
    width: 80px;
    padding: 8px;
    background-color: #f62346;
    color: white;
    border: none;
    border-radius: 10px;
  }
`;
//Style Compoennts close

const Navbar = () => {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView('ContactSection');

  return (
    <Section>
      <Container>
        <Links>
          <Logo href="/" src="./Images/logo1.png" />
          <List>
            <ListItem
              href="https://www.artstation.com/srirampaga"
              target="_blank"
            >
              Portfolio
            </ListItem>
            <ListItem
              href="https://www.linkedin.com/in/sriram-paga-a86a6a221/"
              target="_blank"
            >
              LinkedIn
            </ListItem>
            <ListItem href="#ContactSection">Contact</ListItem>
          </List>
        </Links>

        <Icons>
          <a href="#ContactSection">
            <Button>Hire Now</Button>
          </a>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
