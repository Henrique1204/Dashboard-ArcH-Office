import React from 'react';
import estilos from './Button.module.css';

const Button = ({ loading, texto, ...props }) => {
    if (loading) return <button {...props} className={estilos.btn} disabled>Carregando...</button>

    return <button {...props}  className={estilos.btn}>{texto}</button>
};

export default Button;
