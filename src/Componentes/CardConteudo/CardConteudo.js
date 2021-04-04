import React from 'react';
import estilos from './CardConteudo.module.css';

const CardConteudo = ({ titulo, descricao, link, editar }) => {
    return (
        <div className={estilos.card}>
            <button
                className={estilos.btnEditar}
                onClick={() => editar({ titulo, descricao, link })}
            >
                <i className="fa fa-pencil"></i>
            </button>

            <button className={estilos.btnExcluir}>
                <i className="fa fa-trash"></i>
            </button>

            <h2>{titulo}</h2>

            <p>{descricao}</p>

            <a href={link} rel="noreferrer" target="_blank">Assistir</a>
        </div>
    );
};

export default CardConteudo;
