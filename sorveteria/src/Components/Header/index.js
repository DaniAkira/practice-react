import React from "react";
import { Link } from 'react-router-dom';

export const Header = () => (
    <div>
        <img></img>

        < Link to='/'>Home</Link>
        < Link to='/sabores'>Sabores</Link>
        < Link to='/sobre'>Sobre</Link>
    </div>
)