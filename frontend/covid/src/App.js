import React from 'react';
import './App.css';
import Demo from './demo.js';
import Timeline from './Timeline';
import Welcome from './resources/Header/';
import Map from './resources/map';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Map />
      <Demo />
      <Timeline />
    </div>
  );
}

export default App;
