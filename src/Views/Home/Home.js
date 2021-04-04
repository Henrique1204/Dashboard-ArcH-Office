import React from 'react';
import estilos from './Home.module.css';

const Home = () => {
    return (
        <section className={estilos.home}>
            <div className="container">
                <h1>Bem vindo ao nosso Dashboard</h1>

                <ul>
                    <li>
                        <img src="" alt=""/>
                        <h2>Uusuários</h2>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Home;
