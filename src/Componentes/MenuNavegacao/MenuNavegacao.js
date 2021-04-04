import React from 'react';
import estilos from './MenuNavegacao.module.css';
import { NavLink } from 'react-router-dom';

const MenuNavegacao = () => {
    const [ativo, setAtivo] = React.useState(false);

    return (
        <nav className={estilos.menu}>
            <button
                className={`${estilos.hamburguer} ${(ativo) ? estilos.ativo : ''}`}
                onClick={() => setAtivo(!ativo)}
            >
                <span className={estilos.barrinha}></span>
                <span className={estilos.barrinha}></span>
                <span className={estilos.barrinha}></span>
            </button>

            <ul className={`${estilos.navegacao} ${(ativo) ? estilos.ativo : ''}`}>
                <li> 
                    <NavLink
                        to="/usuarios"
                        activeClassName={estilos.ativo}
                    >
                        usuários
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/relatorios"
                        activeClassName={estilos.ativo}
                        className={estilos.inativo}
                    >
                        relatórios
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/conteudos"
                        activeClassName={estilos.ativo}
                    >
                        conteúdos
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/eventos"
                        activeClassName={estilos.ativo}
                        className={estilos.inativo}
                    >
                        eventos
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/servicos"
                        activeClassName={estilos.ativo}
                        className={estilos.inativo}
                    >
                        serviços
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MenuNavegacao;
