import React from 'react';
import Login from './Views/Login/Login.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rotas = () => {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default rotas;
