import React from 'react';
import Login from './Views/Login/Login.js';
import Cadastrar from './Views/Cadastrar/Cadastrar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rotas = () => {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/cadastrar" element={<Cadastrar />}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default rotas;
