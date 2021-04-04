import React from 'react';
import estilos from './Usuarios.module.css';
import CabecalhoSessao from '../../Componentes/CabecalhoSessao/CabecalhoSessao.js';
import CardUsuarios from '../../Componentes/CardUsuarios/CardUsuarios.js';
import db from '../../db.json';

const Usuarios = () => {
    const [usuarios, setUsuarios] = React.useState(null);
    const [busca, setBusca] = React.useState('');

    const preencherUsuarios = () => {
        if (window.localStorage.getItem('usuario')) {
            const usuarioLogado = JSON.parse(window.localStorage.getItem('usuario'));

            setUsuarios(() => {
                if (!db.usuarios.find(({ usuario }) => usuario === usuarioLogado.usuario )) {
                    return [...db.usuarios, usuarioLogado];
                }

                return db.usuarios;
            });
        } else {
            setUsuarios(db.usuarios);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    React.useEffect(() => {
        if (busca) {
            setUsuarios((usuarios) => {
                return usuarios.filter(({ usuario }) => {
                    return usuario.toUpperCase().includes(busca.toUpperCase());
                });
            });
        } else {
            preencherUsuarios();
        }
    }, [busca]);

    React.useEffect(() => {
        preencherUsuarios();
    }, []);

    return (
        <section className={estilos.usuarios}>
            <CabecalhoSessao titulo="Usuários">
                <form className={estilos.busca} onSubmit={handleSubmit}>
                    <input
                        name="buscaUsuarios"
                        placeholder="Buscar usuários"
                        list="usuarios"
                        value={busca}
                        onChange={({ target }) => setBusca(target.value)}
                    />
                    <button>
                        <i className="fa fa-search"></i>
                    </button>

                    <datalist id="usuarios">
                        { usuarios && usuarios.map(({ usuario }, i) => (
                            <option key={`opcao-${i}`} value={usuario}>{usuario}</option>
                        )) }
                    </datalist>
                </form>
            </CabecalhoSessao>

            <ul className={`container ${estilos.listaCards}`}>
                { usuarios && usuarios.map(({ usuario, sexo }, i) => (
                    <CardUsuarios key={`usuario_${i}`} usuario={usuario} sexo={sexo} />
                )) }
            </ul>
        </section>
    );
};

export default Usuarios;
