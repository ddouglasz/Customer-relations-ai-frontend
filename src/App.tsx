import React from 'react';
import './App.css';
import intents from '../src/data/intents.json'
import Landing from '../src/component/Landing'

function App() {
  console.log(intents)
  return (
    <div className="App">
      <header >Header </header>
      <div className="App-wrapper">
      <Landing  />
      </div>
      <footer>footer </footer>
    </div>
  );
}

export default App;
