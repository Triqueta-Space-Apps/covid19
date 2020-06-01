import React from 'react';
import './App.css';
import Demo from './demo.js';
import Timeline from './Timeline';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Demo />
      <Timeline />
    </div>
  );
}

export default App;
