import React from 'react';
import estilos from './Conteudo.module.css';
import CardConteudo from '../../Componentes/CardConteudo/CardConteudo.js';
import ModalContainer from '../../Componentes/ModalContainer/ModalContainer.js';
import Input from  '../../Componentes/Form/Input/Input.js';
import useForm from '../../Hooks/useForm.js';
import db from '../../db.json';
import Button from '../../Componentes/Form/Button/Button';

const Conteudo = () => {
    const titulo = useForm();
    const link = useForm();

    const [modalAdicionar, setModalAdicionar] = React.useState(false);

    React.useEffect(() => {
        if (!modalAdicionar) {
            titulo.resetar();
            link.resetar();
        }
    }, [modalAdicionar, titulo, link]);

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
                    <Input label="Titulo:" type="text" name="tituloAdicionar" {...titulo} />

                    <label htmlFor="descricaoAdicionar">Descricao</label>
                    <textarea
                        name="descricaoAdicionar"
                        id="descricaoAdicionar"
                        cols="30"
                        rows="10"
                    ></textarea>

                    <Input label="Link:" type="text" name="linkAdicionar" {...link} />

                    <Button texto="Adicionar" style={{ marginTop: '1rem' }}/>
                </ModalContainer>
            ) }
        </section>
    );
};

export default Conteudo;
