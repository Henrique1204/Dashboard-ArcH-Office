import React from 'react';
import estilos from './Home.module.css';
import Head from '../../Head.js';
import CardHome from '../../Componentes/CardHome/CardHome.js';

const Home = () => {
    return (
        <>
            <Head
                title="Home"
                description="Bem vindo ao nosso dashboard, escolha para onde deseja ir."
            />

            <section className={estilos.home}>
                <div className="container animarEntrada">
                    <h1>Bem vindo ao nosso Dashboard</h1>

                    <ul className={estilos.listaCards}>
                        <li>
                            <CardHome icone="users" titulo="Usuários" rota="usuarios" ativo={true} />
                        </li>

                        <li>
                            <CardHome icone="file" titulo="Relatórois" rota="relatorios" ativo={false} />
                        </li>

                        <li>
                            <CardHome icone="play" titulo="Conteúdos" rota="conteudos"ativo={true} />
                        </li>

                        <li>
                            <CardHome icone="calendar" titulo="Eventos" rota="eventos" ativo={false} />
                        </li>

                        <li>
                            <CardHome icone="tv" titulo="Serviços" rota="servico" ativo={false} />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Home;
