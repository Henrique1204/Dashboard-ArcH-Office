import React from 'react';
import estilos from './Button.module.css';

const Button = ({ loading, texto }) => {
    if (loading) return <button className={estilos.btn} disabled>Carregando...</button>

    return <button  className={estilos.btn}>{texto}</button>
};

export default Button;
