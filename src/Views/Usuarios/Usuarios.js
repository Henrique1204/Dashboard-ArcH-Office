import React from 'react';
import estilos from './Usuarios.module.css';

const Usuarios = () => {
    return (
        <section className={estilos.usuarios}>
            <header className={`container ${estilos.cabecalho}`}>
                <h1>Conteúdos</h1>

                <form className={estilos.busca}>
                    <input name="buscaUsuarios" placeholder="Buscar usuários" />
                    <button>
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </header>

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
