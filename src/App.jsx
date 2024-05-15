import { useState } from 'react';
import { lazy, Suspense } from 'react';

// import Hero from './components/Hero';
// import Who from './components/Who';
// import Works from './components/Works';
// import Contact from './components/Contact';
import Loading from './components/Loading';

const Hero = lazy(() => import('./components/Hero'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));
const Who = lazy(() => import('./components/Who'));

import styled from 'styled-components';
// import Test from './components/Test';
const Container = styled.div`
  height: 100vh;
  background-color: #fcfcfc;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  /* background: url('./Images/bg.jpeg'); */

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <Hero />
        <Who />
        <Works />
        <Contact />
      </Suspense>
      {/* <Test /> */}
    </Container>
  );
}

export default App;
