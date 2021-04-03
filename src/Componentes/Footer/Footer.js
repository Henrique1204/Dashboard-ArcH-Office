import React from 'react';
import estilos from './Footer.module.css';

const Footer = () => {
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
