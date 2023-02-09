import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage/script";
import { BBxBTN3x } from "../pages/BBxBTN3x/script";
import { BBxBTNallin } from "../pages/BBxBTNallin/script";
import { SBxBB } from "../pages/SBxBB/script";
import {SBxBTNallin} from "../pages/SBxBTNallin/script";
import { SBxBTNlimp } from "../pages/SBxBTNlimp/script";
import { SBxBTNmr } from "../pages/SBxBTNmr/script";
import { BBxBTNlimp } from "../pages/BBxBTNlimp/script";
import { BBxBTNmr } from "../pages/BBxBTNmr/script";
import { BBxBTNxSBallin } from "../pages/BBxBTNxSBallin/script";
import { BBxLIMP2p } from "../pages/BBxLIMP2p/script";
import { BBxMR2p } from "../pages/BBxMR2p/script";
import { BBxSBallin } from "../pages/BBxSBallin/script";
import { BBxSBlimp } from "../pages/BBxSBlimp/script";
import { BBxSBmr } from "../pages/BBxSBmr/script";
import { HUBBxLIMP } from "../pages/HUBBxLIMP/script";
import { HUBBxMR } from "../pages/HUBBxMR/script";
import { HUBBx3X } from "../pages/HUBBx3X/script";
import { HUBBxAllin } from "../pages/HUBBxAllin/script";
import { HUSB } from "../pages/HUSB/script";

export const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/BBxBTN3x" element={<BBxBTN3x/>} />
            <Route path="/BBxBTNallin" element={<BBxBTNallin/>} />
            <Route path="/SBxBB" element={<SBxBB/>} />
            <Route path="/SBxBTNallin" element={<SBxBTNallin/>} />
            <Route path="/SBxBTNlimp" element={<SBxBTNlimp/>} />
            <Route path="/SBxBTNmr" element={<SBxBTNmr/>} />
            <Route path="/BBxBTNlimp" element={<BBxBTNlimp/>} />
            <Route path="/BBxBTNmr" element={<BBxBTNmr/>} />
            <Route path="/BBxBTNxSBallin" element={<BBxBTNxSBallin/>} />
            <Route path="/BBxLIMP2p" element={<BBxLIMP2p/>} />
            <Route path="/BBxMR2p" element={<BBxMR2p/>} />
            <Route path="/BBxSBallin" element={<BBxSBallin/>} />
            <Route path="/BBxSBlimp" element={<BBxSBlimp/>} />
            <Route path="/BBxSBmr" element={<BBxSBmr/>} />
            <Route path="/HUBBxLIMP" element={<HUBBxLIMP/>} />
            <Route path="/HUBBxMR" element={<HUBBxMR/>} />
            <Route path="/HUBBx3X" element={<HUBBx3X/>} />
            <Route path="/HUBBxAllin" element={<HUBBxAllin/>} />
            <Route path="/HUSB" element={<HUSB/>} />
        </Routes>
    </BrowserRouter>
) 