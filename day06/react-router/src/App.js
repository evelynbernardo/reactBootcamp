import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
        <Link to="/sobre">Ir para a página dois</Link>
      </p>
      </header>
      
    </div>
  );
}

export default App;
