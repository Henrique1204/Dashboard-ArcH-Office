import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header.js';
import Rotas from './Rotas.js';
import Footer from './Componentes/Footer/Footer.js';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
