import React from 'react';
import estilos from './CardHome.module.css';
import { Link } from 'react-router-dom';

const CardHome = ({ icone, titulo, rota }) => {
    return (
        <Link to={`/${rota}`} className={estilos.card}>
            <i className={`fa fa-${icone}`}></i>
            <h2>{titulo}</h2>
        </Link>
    );
};

export default CardHome;
