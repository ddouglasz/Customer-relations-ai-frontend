import React from 'react';
import intents from '../src/data/intents.json'
import Landing from '../src/component/Landing'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import styled from 'styled-components'

const StyledWrapper = styled.div`
  .App-wrapper {
  background-color: #282c34;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
 }
`;


function App() {
  console.log(intents)
  return (
    <StyledWrapper className="App">
      <ToastContainer />
      <header >Header </header>
      <div className="App-wrapper">
        <Landing />
      </div>
      <footer>footer </footer>
    </StyledWrapper>
  );
}

export default App;
