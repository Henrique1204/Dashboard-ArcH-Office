import React from 'react';
import estilos from './Conteudo.module.css';
import CardConteudo from '../../Componentes/CardConteudo/CardConteudo.js';
import ModalContainer from '../../Componentes/ModalContainer/ModalContainer.js';
import db from '../../db.json';

const Conteudo = () => {
    return (
        <section className={` ${estilos.conteudo}`}>
            <header className={`container ${estilos.cabecalho}`}>
                <h1>Conteúdos</h1>
                <button className={estilos.btnAdicionar}>Adicionar Novo</button>
            </header>

            <ul className={`container ${estilos.listaCards}`}>
                { db.conteudos.map(({ titulo, descricao, link }, i) => (
                    <li key={`conteudo_${i}`}>
                        <CardConteudo titulo={titulo} descricao={descricao} link={link} />
                    </li>
                )) }
            </ul>
    
        </section>
    );
};

export default Conteudo;
