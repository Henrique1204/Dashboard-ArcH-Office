import React from 'react';
import estilos from './ModalUsuario.module.css';
import db from '../../db.json';

const ModalUsuario = ({ setAtivo }) => {
    const [nome, setNome] = React.useState(null);
    const [notificacoes, setNotificacoes] = React.useState(null);

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
                { notificacoes && notificacoes.map((notificacao) => (
                    <li>{notificacao}</li>
                ))  }
            </ul>

            <button className={estilos.sair}>Sair</button>
        </div>
    );
};

export default ModalUsuario;
