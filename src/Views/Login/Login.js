import React from "react";
import estilos from "./Login.module.css";
import Head from '../../Head.js';
import Input from '../../Componentes/Form/Input/Input.js';
import Button from "../../Componentes/Form/Button/Button.js";
import useForm from '../../Hooks/useForm.js';
import { Link, useNavigate } from 'react-router-dom';
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

        if (!usuario.validar() && !senha.validar()) {
            setLoading(false);
            return setErro('Campos inválidos!');
        }

        setTimeout(() => {
            const { usuarios } = db;

            const isExiste = usuarios.find((usuarioDB) => {
                return usuarioDB.usuario === usuario.valor && usuarioDB.senha === senha.valor;
            });
    
            if (isExiste) {
                const { usuario, tipo, sexo } = isExiste;
                window.localStorage.setItem('usuario', JSON.stringify({ usuario, tipo, sexo }));
                return navegar('/');
            } else {
                window.localStorage.removeItem('usuario');
                setErro('Usuário não existe!');
            }
        }, 300);

        setLoading(false);
    };

    return (
        <>
            <Head
                title="Login"
                description="Tela para login de usuário para acessar o dashboard."
            />

            <section className={`${estilos.sessao} animarEntrada`}>
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

                    <Button loading={loading} texto="Entrar" />
                    { erro && <small className={estilos.erro}>{erro}</small> }
                </form>

                <Link to="/cadastrar" className={estilos.Link}>Não é Cadastrado? Clique aqui</Link>
            </section>
        </>
    );
};

export default Login;
