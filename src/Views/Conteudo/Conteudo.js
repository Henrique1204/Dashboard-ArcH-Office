import React from 'react';
import estilos from './Conteudo.module.css';
import CabecalhoSessao from '../../Componentes/CabecalhoSessao/CabecalhoSessao.js';
import CardConteudo from '../../Componentes/CardConteudo/CardConteudo.js';
import ModalContainer from '../../Componentes/ModalContainer/ModalContainer.js';
import Input from  '../../Componentes/Form/Input/Input.js';
import Textarea from  '../../Componentes/Form/Textarea/Textarea.js';
import useForm from '../../Hooks/useForm.js';
import db from '../../db.json';
import Button from '../../Componentes/Form/Button/Button';

const Conteudo = () => {
    const titulo = useForm();
    const descricao = useForm();
    const link = useForm();

    const [modalAdicionar, setModalAdicionar] = React.useState(false);
    const [modalEditar, setModalEditar] = React.useState(false);
    const [modalDeletar, setModalDeletar] = React.useState(false);

    const adicionar = () => {
        setModalAdicionar(true);

        titulo.resetar();
        descricao.resetar();
        link.resetar();
    }

    const editar = (dados) => {
        setModalEditar(true);

        titulo.setValor(dados.titulo);
        descricao.setValor(dados.descricao);
        link.setValor(dados.link);
    };

    const deletar = () => {
        setModalDeletar(true);
    }

    return (
        <section className={` ${estilos.conteudo}`}>
            <CabecalhoSessao titulo="Conteúdos">
                <button className={estilos.btnAdicionar} onClick={adicionar}>
                    Adicionar Novo
                </button>
            </CabecalhoSessao>

            <ul className={`container ${estilos.listaCards}`}>
                { db.conteudos.map(({ titulo, descricao, link }, i) => (
                    <li key={`conteudo_${i}`}>
                        <CardConteudo
                            titulo={titulo}
                            descricao={descricao}
                            link={link}
                            editar={editar}
                            deletar={deletar}
                        />
                    </li>
                )) }
            </ul>
    
            { modalAdicionar && (
                <ModalContainer
                    titulo="Adicionar"
                    setAtivo={setModalAdicionar}
                    classe={estilos.modalAdicionar}
                >
                    <div className={estilos.campo}>
                        <Input label="Titulo:" type="text" name="tituloAdicionar" {...titulo} />
                    </div>

                    <div className={estilos.campo}>
                        <Textarea label="Descrição:" name="descricaoAdicionar" {...descricao} />
                    </div>

                    <div className={estilos.campo}>
                        <Input label="Link:" type="text" name="linkAdicionar" {...link} />
                    </div>

                    <Button texto="Adicionar" />
                </ModalContainer>
            ) }

            { modalEditar && (
                <ModalContainer
                    titulo="Editar"
                    setAtivo={setModalEditar}
                    classe={estilos.modalEditar}
                >
                    <div className={estilos.campo}>
                        <Input label="Titulo:" type="text" name="tituloEditar" {...titulo} />
                    </div>

                    <div className={estilos.campo}>
                        <Textarea label="Descrição:" name="descricaoEditar" {...descricao} />
                    </div>

                    <div className={estilos.campo}>
                        <Input label="Link:" type="text" name="linkEditar" {...link} />
                    </div>

                    <Button texto="Editar" />
                </ModalContainer>
            ) }

            { modalDeletar && (
                <ModalContainer
                    titulo="Deletar"
                    setAtivo={setModalDeletar}
                    classe={estilos.modalDeletar}
                >
                    <p>Certeza que deseja deletar?</p>

                    <button className={estilos.sim}>Sim</button>
                    <button className={estilos.nao} onClick={() => setModalDeletar(false)}>
                        Não
                    </button>
                </ModalContainer>
            ) }
            
        </section>
    );
};

export default Conteudo;
