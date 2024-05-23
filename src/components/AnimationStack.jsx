import React from 'react';
// import { Grid } from '@mui/material';
// import { Container, Row, Col } from 'react-bootstrap';
import { BiLogoReact } from 'react-icons/bi';
import AutodeskMax from '../../public/Images/StackImages/Animator/3dsMaxLogo.svg';
import AdobeIllustrator from '../../public/Images/StackImages/Animator/adobeIllustratorLogo.svg';
import AdobePhotoshop from '../../public/Images/StackImages/Animator/adobePhotoshopLogo.svg';
// import Maya from '../../public/Images/StackImages/Animator/maya.svg';
import Maya from '../../public/Images/StackImages/Animator/MayaLogo2.svg';
import Mudbox from '../../public/Images/StackImages/Animator/mudbox.svg';

import { styled } from 'styled-components';
// import { Col, Row } from 'react-bootstrap';
// import './Animator.scss';

const ContainerGrid = styled.div`
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 50px; */
  padding: 10px;
  width: auto;

  @media only screen and (max-width: 760px) {
    width: 100%;
    flex: 1;
    display: grid;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const ImgContainer = styled.div`
  display: block;
  justify-content: center;
  width: max-content;
  align-items: center;
  margin: 5px;
  padding: 10px;

  @media only screen and (max-width: 760px) {
    width: 100%;
    flex: 1;
    display: grid;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Img = styled.img`
  filter: grayscale(80%);
  max-width: 50px;
  height: 100%;
  &:hover {
    filter: grayscale(0%);
    transition: ease-in-out 150ms;
    scale: 1.1;
  }
  @media only screen and (max-width: 760px) {
    max-width: 40px;
    height: 100%;
  }
`;
const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AnimationStack() {
  const softwareLogos = [
    AutodeskMax,
    AdobeIllustrator,
    AdobePhotoshop,
    Maya,
    Mudbox,
  ];

  return (
    <StyledRow>
      {softwareLogos.map((logo, index) => {
        return (
          <Column key={index}>
            <Img className="logos" src={logo} />
          </Column>
        );
      })}
    </StyledRow>
  );
}

export default AnimationStack;
