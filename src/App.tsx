import React from 'react';
import Landing from './component/Landing/Landing'
import {Header} from './component/Presentational/Header'
import {Footer} from './component/Presentational/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import styled from 'styled-components'

const StyledWrapper = styled.div`
    background-color: #002D4F;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;


function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <StyledWrapper >
        <Landing />
      </StyledWrapper>
      <Footer />
    </>
  );
}

export default App;
