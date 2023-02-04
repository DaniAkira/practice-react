import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage/script'
import { MiragePage } from '../pages/MiragePage/script';
import { InfernoPage } from '../pages/InfernoPage/script';
import { OverpassPage } from '../pages/OverpassPage/script';
import { NukePage } from '../pages/NukePage/script';
import { VertigoPage } from '../pages/VertigoPage/script';
import { AncientPage } from '../pages/AncientPage/script';
import { AnubisPage } from '../pages/AnubisPAge/script';

export const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
            <Route path="/mirage" element={<MiragePage/>}></Route>
            <Route path="/inferno" element={<InfernoPage/>}></Route>
            <Route path="/overpass" element={<OverpassPage/>}></Route>
            <Route path="/nuke" element={<NukePage/>}></Route>
            <Route path="/vertigo" element={<VertigoPage/>}></Route>
            <Route path="/ancient" element={<AncientPage/>}></Route>
            <Route path="/anubis" element={<AnubisPage/>}></Route>
        </Routes>
    </BrowserRouter>
) 