import React from 'react';
import estilos from './Radio.module.css';

const Radio = ({ opcoes, labels, valor, onChange, onBlur}) => {
    return (
        <>
            {
                opcoes.map((op, i) => (
                    <label key={op + i} className={estilos.label}>
                        {`${labels[i]} `}
                        <input
                            type="radio"
                            value={op}
                            checked={valor === op}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                    </label>
                ))
            }
        </>
    );
};

export default Radio;
