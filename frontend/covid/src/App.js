import React from 'react';
import './App.css';
import Demo from './demo.js';
import Timeline from './Timeline';
import Welcome from './resources/Header/';
import Map from './resources/map';
import api from './resources/coronAPI';

function App() {
  async function data(){
    const response = await api.get('data?country=brazil');
    return response.data;
  }
  //fixit: isso não espera a função acabar para receber os dados. Nao posso usar await pois se a função principal não pode ser async por algum motivo. oh céus.
  var displayData = JSON.stringify(data());
  return (
    <div className="App">
      <Welcome />
      <Map />
      <Demo />
      <p>{displayData}</p>
      <Timeline />
    </div>
  );
}

export default App;
