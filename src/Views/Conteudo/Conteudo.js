import React from 'react';
import estilos from './Conteudo.module.css';
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

    React.useEffect(() => {
        if (!modalAdicionar) {
            titulo.resetar();
            descricao.resetar();
            link.resetar();
        }
    }, [modalAdicionar, titulo, link, descricao]);

    return (
        <section className={` ${estilos.conteudo}`}>
            <header className={`container ${estilos.cabecalho}`}>
                <h1>Conteúdos</h1>
                <button className={estilos.btnAdicionar} onClick={() => setModalAdicionar(true)}>
                    Adicionar Novo
                </button>
            </header>

            <ul className={`container ${estilos.listaCards}`}>
                { db.conteudos.map(({ titulo, descricao, link }, i) => (
                    <li key={`conteudo_${i}`}>
                        <CardConteudo titulo={titulo} descricao={descricao} link={link} />
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
        </section>
    );
};

export default Conteudo;
