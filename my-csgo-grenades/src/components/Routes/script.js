import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage/script'
import { MiragePage } from '../pages/MiragePage/script';

export const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
            <Route path="/Mirage" element={<MiragePage/>}></Route>
        </Routes>
    </BrowserRouter>
) 