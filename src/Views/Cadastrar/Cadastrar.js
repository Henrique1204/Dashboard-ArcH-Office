import React from "react";
import estilos from "./Cadastrar.module.css";
import Input from '../../Componentes/Form/Input/Input.js';
import useForm from '../../Hooks/useForm.js';
import { useNavigate } from 'react-router-dom';
import db from '../../db.json';

const Cadastrar = () => {
    const usuario = useForm();
    const senha = useForm('senha');
    const tipo = useForm();
    const sexo = useForm();

    const [erro, setErro] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
    const navegar = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setErro(null);

        if (!usuario.validar() && !senha.validar() && !tipo.validar() && !sexo.validar()) {
            return setErro('Campos inválidos!');
        }

        setTimeout(() => {
            const { usuarios } = db;

            const isExiste = usuarios.find((usuarioDB) => usuarioDB.usuario === usuario.valor);
    
            if (!isExiste) {
                const usuarioNovo = {
                    usuario: usuario.valor,
                    tipo: tipo.valor,
                    sexo: sexo.valor
                };

                window.localStorage.setItem('usuario', JSON.stringify(usuarioNovo));
                navegar('/');
            } else {
                window.localStorage.removeItem('usuario');
                setErro('Usuário já está cadastrado!');
            }
    
            setLoading(false);
        }, 300);
    };

    return (
        <section className={estilos.sessao}>
            <h1>Cadastrar</h1>

            <form onSubmit={handleSubmit}>
                <div className={estilos.containerInput}>
                    <Input label="Usuário:" type="text" name="usuario" {...usuario} />
                    <i className="fa fa-user"></i>
                </div>

                <div className={estilos.containerInput}>
                    <Input label="Senha:" type="password" name="senha" {...senha} />
                    <i className="fa fa-unlock-alt"></i>
                </div>
    
                <div className={estilos.containerInput}>
                    <select name="tipo" onChange={tipo.onChange}>
                        <option disabled value="">Seleciona o tipo de usuário...</option>
                        <option value="EMPRESA">Empresa</option>
                        <option value="PESSOA">Pessoa</option>
                    </select>
                    { sexo.erro && <small>{sexo.erro}</small> }
                </div>

                <div className={estilos.containerInput}>
                    <label htmlFor="M">
                        Masculino: 
                        <input
                            type="radio"
                            name="sexo"
                            id="M"
                            value="M"
                            checked={sexo.valor === "M"}
                            onChange={sexo.onChange}
                        />
                    </label>

                    <label htmlFor="F">
                        Feminino: 
                        <input
                            type="radio"
                            name="sexo"
                            id="F"
                            value="F"
                            checked={sexo.valor === "F"}
                            onChange={sexo.onChange}
                        />
                    </label>

                    { sexo.erro && <small>{sexo.erro}</small> }
                </div>

                <button disabled={loading}>Cadastrar</button>
                { erro && <small className={estilos.erro}>{erro}</small> }
            </form>
        </section>
    );
};

export default Cadastrar;
