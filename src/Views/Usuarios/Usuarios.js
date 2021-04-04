import React from 'react';
import estilos from './Usuarios.module.css';
import CabecalhoSessao from '../../Componentes/CabecalhoSessao/CabecalhoSessao.js';
import CardUsuarios from '../../Componentes/CardUsuarios/CardUsuarios.js';
import db from '../../db.json';

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
                { db.usuarios.map(({ usuario, sexo }, i) => (
                    <CardUsuarios key={`usuario_${i}`} usuario={usuario} sexo={sexo} />
                )) }
            </ul>
        </section>
    );
};

export default Usuarios;
