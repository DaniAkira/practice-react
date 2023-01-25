import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "../Paginas/Home";
import { Sabores } from "../Paginas/Sabores";
import { Sobre } from "../Paginas/Sobre";

export const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
            <Route path="/sabores" element={<Sabores/>}></Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
        </Routes>
    </BrowserRouter>
)