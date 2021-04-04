import React from 'react';
import estilos from './Textarea.module.css';

const Input = ({ label, name, valor, onChange, erro, onBlur }) => {
    return (
        <div className={estilos.wrapper}>
            <label htmlFor={name} className={estilos.label} >{label}</label>

            <textarea
                id={name}
                name={name}
                className={estilos.textarea}
                value={valor}
                onChange={onChange}
                onBlur={onBlur}
                rows="5"
            ></textarea>

            { erro && <small className={estilos.erro}>{erro}</small> }
        </div>
    );
};

export default Input;