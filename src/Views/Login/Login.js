import React from "react";
import estilos from "./Login.module.css";
import Input from '../../Componentes/Form/Input/Input.js';
import useForm from '../../Hooks/useForm.js';
import { useNavigate } from 'react-router-dom';
import db from '../../db.json';

const Login = () => {
    const usuario = useForm();
    const senha = useForm();
    const [erro, setErro] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
    const navegar = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setErro(null);

        if (!usuario.validar() && !senha.validar()) setErro('Dados inválidos!');

        setTimeout(() => {
            const { usuarios } = db;

            const isExiste = usuarios.find((usuarioDB) => {
                return usuarioDB.usuario === usuario.valor && usuarioDB.senha === senha.valor;
            });
    
            if (isExiste) {
                window.localStorage.setItem('usuario', JSON.stringify(isExiste));
                navegar('/');
            } else {
                window.localStorage.removeItem('usuario');
                setErro('Usuário não existe!');
            }
    
            setLoading(false);
        }, 300);
    };

    return (
        <section className={estilos.sessao}>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div className={estilos.containerInput}>
                    <Input label="Usuário:" type="text" name="usuario" {...usuario} />
                    <i className="fa fa-user"></i>
                </div>

                <div className={estilos.containerInput}>
                    <Input label="Senha:" type="password" name="senha" {...senha} />
                    <i className="fa fa-unlock-alt"></i>
                </div>

                <button disabled={loading}>Entrar</button>
                { erro && <small className={estilos.erro}>{erro}</small> }
            </form>
        </section>
    );
};

export default Login;
