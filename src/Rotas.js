import React from 'react';
import Login from './Views/Login/Login.js';
import Cadastrar from './Views/Cadastrar/Cadastrar.js';
import Home from './Views/Home/Home.js';
import { Routes, Route } from 'react-router-dom';

const rotas = () => {
    return (
        <main>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastrar" element={<Cadastrar />}/>

                <Route path="/" element={<Home />}/>
            </Routes>
        </main>
    );
};

export default rotas;
