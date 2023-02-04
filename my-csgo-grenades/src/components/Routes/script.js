import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage/script'

export const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
        </Routes>
    </BrowserRouter>
) 