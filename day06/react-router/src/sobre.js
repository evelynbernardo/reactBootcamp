import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
function Sobre() {
  return (
    <div className="App">
      <header className="Sobre-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <Link to="/">Voltar para a página anterior</Link>
        </p>
      </header>
    </div>
  );
}

export default Sobre;