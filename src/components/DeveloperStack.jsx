import React from 'react';
// import { Grid } from '@mui/material';
// import { Container, Row, Col } from 'react-bootstrap';
import { BiLogoReact } from 'react-icons/bi';

import HtmlLogo from '../../public/Images/StackImages/developer/htmlLogo.svg';
import JavaScriptLogo from '../../public/Images/StackImages/developer/javaScriptLogo.svg';
import GithubLogo from '../../public/Images/StackImages/developer/githubLogo.svg';
import ReactBootstrap from '../../public/Images/StackImages/developer/reactBsLogo1.svg';
import CssIcon from '../../public/Images/StackImages/developer/cssLogo.svg';
import NodeJsIcon from '../../public/Images/StackImages/developer/nodeJsLogo3.svg';
import MaterialUiLogo from '../../public/Images/StackImages/developer/materialUiLogo.svg';
import ReactLogo from '../../public/Images/StackImages/developer/reactLogo.svg';
import MySqlLogo from '../../public/Images/StackImages/developer/mySqlLogo.svg';
import Figma from '../../public/Images/StackImages/developer/Figma.svg';
import MongoDb from '../../public/Images/StackImages/developer/MongoDb.svg';
import TailwindCssIcon from '../../public/Images/StackImages/developer/TailwindCss.svg';
// import Xampp from '../../public/Images/StackImages/developer/Xampp.svg';

// import './developer.scss';
import { styled } from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
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

function DeveloperStack() {
  const softwareLogos = [
    HtmlLogo,
    CssIcon,
    JavaScriptLogo,
    ReactBootstrap,
    ReactLogo,
    MaterialUiLogo,
    TailwindCssIcon,
    GithubLogo,
    NodeJsIcon,
    MySqlLogo,
    MongoDb,
    Figma,
  ];

  return (
    <StyledRow>
      {softwareLogos.map((logo, index) => {
        return (
          <Column key={index} className=" d-flex col-md-2 p-2 m-1">
            <Img className="logos" src={logo} />
          </Column>
        );
      })}
    </StyledRow>
  );
}

export default DeveloperStack;
