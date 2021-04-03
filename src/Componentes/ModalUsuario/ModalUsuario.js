import React from 'react';
import estilos from './ModalUsuario.module.css';
import db from '../../db.json';
import { useNavigate } from 'react-router';

const ModalUsuario = ({ setAtivo }) => {
    const [nome, setNome] = React.useState(null);
    const [notificacoes, setNotificacoes] = React.useState(null);
    const navegar = useNavigate();

    const logout = () => {
        window.localStorage.removeItem('usuario');
        navegar('/login');
    };

    React.useEffect(() => {
        const usuarioLogado = window.localStorage.getItem('usuario');

        if (usuarioLogado) {
            const { usuario } = JSON.parse(usuarioLogado);
            setNome(usuario);

            setNotificacoes(db.notificacoes)
        }
    }, []);

    return (
        <div className={estilos.modal}>
            <button className={estilos.fechar} onClick={() => setAtivo(false)}>
                <i className="fa fa-times"></i>
            </button>
            <h2 className={estilos.nome}>{nome}</h2>

            <ul className={estilos.notificacoes}>
                { notificacoes && notificacoes.map((notificacao, i) => (
                    <li key={`notificacao_${i}`}>{notificacao}</li>
                ))  }
            </ul>

            <button className={estilos.sair} onClick={logout}>Sair</button>
        </div>
    );
};

export default ModalUsuario;
