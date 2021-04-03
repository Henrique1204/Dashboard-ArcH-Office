import React from "react";
import estilos from "./Login.module.css";
import useForm from '../../Hooks/useForm.js';

const Login = () => {
    const usuario = useForm();
    const senha = useForm();

    return (
        <section className={estilos.sessao}>
            <h1>Login</h1>

            <form>
                <label htmlFor="usuario">Usuário:</label>
                <div className={estilos.containerInput}>
                    <input
                        type="text"
                        name="usuario"
                        value={usuario.value}
                        onChange={usuario.onChange}
                        onBlur={usuario.onBlur}
                    />

                    <i className="fa fa-user"></i>
                    { usuario.erro && <small className={estilos.erro}>{usuario.erro}</small> }
                </div>

                <label htmlFor="senha">Senha:</label>
                <div className={estilos.containerInput}>
                    <input
                        type="password"
                        name="senha"
                        value={senha.value}
                        onChange={senha.onChange}
                        onBlur={senha.onBlur}
                    />
    
                    <i className="fa fa-unlock-alt"></i>
                    { senha.erro && <small className={estilos.erro}>{senha.erro}</small> }
                </div>

                <button>Entrar</button>
            </form>
        </section>
    );
};

export default Login;
