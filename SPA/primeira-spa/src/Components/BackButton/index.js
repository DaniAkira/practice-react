import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export const BackButton = () => (
    <div className="button-area">
        <Link className="back-button" to='/'>Voltar</Link>
    </div>
);