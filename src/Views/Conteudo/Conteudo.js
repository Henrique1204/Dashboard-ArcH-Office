import React from 'react';
import estilos from './Conteudo.module.css';

const Conteudo = () => {
    return (
        <section className={`container ${estilos.conteudo}`}>
            <header className={estilos.cabecalho}>
                <h1>Conteúdos</h1>
                <button className={estilos.btnAdicionar}>Adicionar Novo</button>
            </header>

            <ul className={estilos.listaCard}>
                <li>
                    <h2>Os 7 serviços de arquitetura</h2>
                    <p>No conteúdo de hoje vamos falar sobre os 7 principais serviços de arquitetura que um arquiteto de soluções ou arquiteto de software executa individualmente em squads ou em times de arquitetura</p>

                    <a
                        href="https://www.youtube.com/watch?v=_JgMuvpEh5c"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Assistir
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Conteudo;
