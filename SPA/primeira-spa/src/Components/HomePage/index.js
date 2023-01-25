import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export const HomePage = () => (
    <div>
        <h1>Escolha seu caminho em JavaScript</h1>

        <div className="content">
            <Link className="front-end-option" to='/front-end-page'>Front-End</Link>
            <Link className="back-end-option" to='/back-end-page'>Back-End</Link>
        </div>
    </div>
);