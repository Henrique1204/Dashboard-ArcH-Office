import React from "react";
import estilos from "./Cadastrar.module.css";
import Input from '../../Componentes/Form/Input/Input.js';
import Radio from "../../Componentes/Form/Radio/Radio.js";
import Select from "../../Componentes/Form/Select/Select.js";
import Button from "../../Componentes/Form/Button/Button.js";
import useForm from '../../Hooks/useForm.js';
import { useNavigate } from 'react-router-dom';
import db from '../../db.json';

const Cadastrar = () => {
    const usuario = useForm();
    const senha = useForm();
    const tipo = useForm();
    const sexo = useForm();

    const [erro, setErro] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
    const navegar = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setErro(null);

        const condicaoSexo = tipo.valor === 'PESSOA' ? sexo.validar() : true;
        if (usuario.validar() && senha.validar() && tipo.validar() && condicaoSexo) {
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
            }, 300);
        } else {
            setErro('Campos inválidos!');
        }

        setLoading(false);
    };

    return (
        <section className={`${estilos.sessao} animarEntrada`}>
            <h1>Cadastrar</h1>

            <form onSubmit={handleSubmit}>
                <div className={estilos.campo}>
                    <Input label="Usuário:" type="text" name="usuario" {...usuario} />
                    <i className="fa fa-user"></i>
                </div>

                <div className={estilos.campo}>
                    <Input label="Senha:" type="password" name="senha" {...senha} />
                    <i className="fa fa-unlock-alt"></i>
                </div>
    
                <div className={estilos.campo}>
                    <Select
                        opcoes={['PESSOA', 'EMPRESA']}
                        labels={['Pessoa', 'Empresa']}
                        {...tipo}
                    />
                </div>

                {tipo.valor === 'PESSOA' && (
                    <div className={estilos.campo}>
                        <h3>escolha o sexo:</h3>
                        <Radio opcoes={['M', 'F']} labels={['Masculino', 'Feminino']} {...sexo} />
    
                        { sexo.erro && <small className={estilos.erro}>{sexo.erro}</small> }
                    </div>
                )}

                <Button loading={loading} texto="Cadastrar" />
                { erro && <small className={estilos.erro}>{erro}</small> }
            </form>
        </section>
    );
};

export default Cadastrar;
