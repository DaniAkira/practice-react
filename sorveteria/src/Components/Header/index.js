import React from "react";
import { Link } from 'react-router-dom';
import './style.css'

export const Header = () => (
    <header>
        <img src="assets/logo.png"></img>

        <nav className="navigation">
            < Link className="link-header" to='/'>Home</Link>
            < Link className="link-header" to='/sabores'>Sabores</Link>
            < Link className="link-header"to='/sobre'>Sobre</Link>
        </nav>
    </header>
)