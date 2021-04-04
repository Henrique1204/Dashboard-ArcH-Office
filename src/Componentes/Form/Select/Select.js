import React from 'react';
import estilos from './Select.module.css';

const Select = ({ opcoes, labels, label,onChange, onBlur, erro }) => {
    return (
        <>
            <label>{label}</label>
            <select onChange={onChange} onBlur={onBlur} className={estilos.select}>
            <option value="">Selecione a opção...</option>
                {
                    opcoes.map((op, i) => (
                        <option key={op} value={op}>{labels[i]}</option>
                    ))
                }
            </select>

            { erro && <small className={estilos.erro}>{erro}</small> }
        </>
    );
};

export default Select;
