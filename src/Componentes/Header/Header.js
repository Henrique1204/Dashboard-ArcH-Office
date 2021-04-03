import React from 'react';
import estilos from './Header.module.css';
import logoImg from '../../Assets/logo.png';
import { useLocation } from 'react-router';

const Header = () => {
    const { pathname } = useLocation();

    if (pathname === '/login' || pathname === '/cadastrar') return null;

    return (
        <header className={estilos.header}>
            <div className={`${estilos.containerHeader} container`}>
                <div className={estilos.logo}>
                    <img src={logoImg} alt="ArcH Office - Logo"/>
                </div>

                <div className={estilos.busca}>
                    <input type="text" placeholder="Pesquise aqui"/>
                    <i className="fa fa-search"></i>
                </div>

                <button className={estilos.usuario}>
                    <span className={estilos.notificacao}>0</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
