import React from "react";
import estilos from "./Login.module.css";
import Input from '../../Componentes/Form/Input/Input.js';
import useForm from '../../Hooks/useForm.js';

const Login = () => {
    const usuario = useForm();
    const senha = useForm();

    return (
        <section className={estilos.sessao}>
            <h1>Login</h1>

            <form>
                <div className={estilos.containerInput}>
                    <Input label="Usuário:" type="text" name="usuario" {...usuario} />
                    <i className="fa fa-user"></i>
                </div>

                <div className={estilos.containerInput}>
                    <Input label="Senha:" type="password" name="senha" {...senha} />
                    <i className="fa fa-unlock-alt"></i>
                </div>

                <button>Entrar</button>
            </form>
        </section>
    );
};

export default Login;
