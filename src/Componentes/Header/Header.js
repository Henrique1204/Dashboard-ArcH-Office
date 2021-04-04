import React from 'react';
import estilos from './Header.module.css';
import logoImg from '../../Assets/logo.png';
import ModalUsuario from '../ModalUsuario/ModalUsuario.js';
import MenuNavegacao from '../MenuNavegacao/MenuNavegacao.js';
import { useLocation } from 'react-router';

const Header = () => {
    const [modalAtivo, setModalAtivo] = React.useState(false);
    const [classe, setClasse] = React.useState(null);
    const [inicial, setInicial] = React.useState('');
    const { pathname } = useLocation();

    React.useEffect(() => {
        if (window.localStorage.getItem('usuario')) {
            const usuario = JSON.parse(window.localStorage.getItem('usuario'));
            setInicial(usuario.usuario[0]);
            setClasse(() => (!usuario.sexo) ? 'cinza' : (usuario.sexo === 'F') ? 'rosa' : 'azul');
        }
    }, [pathname]);

    if (pathname === '/login' || pathname === '/cadastrar') return null;

    return (
        <>
            <header className={estilos.header}>
                <div className={`${estilos.containerHeader} container`}>
                    <div className={estilos.logo}>
                        <img src={logoImg} alt="ArcH Office - Logo"/>
                    </div>

                    <div className={estilos.busca}>
                        <input type="text" placeholder="Pesquise aqui"/>
                        <i className="fa fa-search"></i>
                    </div>

                    <button
                        className={`${estilos.usuario} ${(classe) ? estilos[classe] : ''}`}
                        onClick={() => setModalAtivo(!modalAtivo)}
                    >
                        <span className={estilos.inicial}>{inicial}</span>
                        <span className={estilos.notificacao}>2</span>
                    </button>

                    { modalAtivo && <ModalUsuario setAtivo={setModalAtivo} /> }
                </div>
            </header>

            { pathname !== '/' && <MenuNavegacao /> }
        </>
    );
};

export default Header;
