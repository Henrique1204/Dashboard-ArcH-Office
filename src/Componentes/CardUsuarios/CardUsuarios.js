import React from 'react';
import estilos from './CardUsuarios.module.css';

const CardUsuarios = ({ usuario, sexo }) => {
    const classe = (!sexo) ? 'cinza' : (sexo === 'F') ? 'rosa' : 'azul';

    return (
        <li className={`${estilos.card} ${estilos[classe]}`}>
            <h3>{usuario}</h3>
            <i className="fa fa-arrow-circle-right"></i>
        </li>
    );
};

export default CardUsuarios;
