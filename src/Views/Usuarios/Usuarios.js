import React from 'react';
import estilos from './Usuarios.module.css';
import CabecalhoSessao from '../../Componentes/CabecalhoSessao/CabecalhoSessao.js';

const Usuarios = () => {
    return (
        <section className={estilos.usuarios}>
            <CabecalhoSessao titulo="Usuários">
                <form className={estilos.busca}>
                    <input name="buscaUsuarios" placeholder="Buscar usuários" />
                    <button>
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </CabecalhoSessao>

            <ul className={`container ${estilos.listaCards}`}>
                <li>
                    <h3>Usuários</h3>
                    <i className="fa fa-arrow-circle-right"></i>
                </li>
            </ul>
        </section>
    );
};

export default Usuarios;
