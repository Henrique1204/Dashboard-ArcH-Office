import React from 'react';
import { useLocation } from 'react-router';
import estilos from './Footer.module.css';

const Footer = () => {
    const { pathname } = useLocation();

    console.log(pathname);
    if (pathname === '/login' || pathname === '/cadastrar') return null;

    return (
        <footer className={estilos.footer}>
            <div className="container">
                <h1>Teste realizado para ArcH Office</h1>

                <ul className={estilos.contato}>
                    <li>contato@archoffice.tech</li>
                    <li>(11) 2844-2272 </li>
                    <li>
                        <a href="https://github.com/Henrique1204" targert="_blank">desenvolvedor</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
