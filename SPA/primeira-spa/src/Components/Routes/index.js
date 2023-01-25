import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '../HomePage';
import { FrontEndPage } from '../FrontEndPage';
import { BackEndPage } from '../BackEndPage';

export const RoutesLines = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/front-end-page' element={<FrontEndPage/>}/>
            <Route exact path='/back-end-page' element={<BackEndPage/>}/>
        </Routes>
    </BrowserRouter>
);