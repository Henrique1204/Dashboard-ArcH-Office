import React from 'react';
import estilos from './CabecalhoSessao.module.css';

const CabecalhoSessao = ({ titulo, children }) => {
    return (
        <header className={`container ${estilos.cabecalho}`}>
            <h1>{titulo}</h1>

            { children }
        </header>
    );
};

export default CabecalhoSessao;
