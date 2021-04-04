import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header.js';
import Rotas from './Rotas.js';
import Footer from './Componentes/Footer/Footer.js';
import { useNavigate } from 'react-router';

const App = () => {
  const navegar = useNavigate();

  React.useEffect(() => {
    if (!window.localStorage.getItem('usuario')) navegar('/login');
  }, [navegar]);

  return (
    <>
      <Header />
      <Rotas />
      <Footer />
    </>
  );
};

export default App;
