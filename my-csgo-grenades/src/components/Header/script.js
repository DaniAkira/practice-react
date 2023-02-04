import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => (
    <header>
        <div className='header-section' id='header'>
            <a href='#header'><img src='assets/Logo.png'></img></a>

            <nav className='nav-bar'>
                <li>< Link className='link-nav' to='/'>Home</Link></li>
                <li>< Link className='link-nav' to='/mirage'>Mirage</Link></li>
                <li>< Link className='link-nav' to='/inferno'>Inferno</Link></li>
                <li className='link-nav'>Outros
                    <ul className='nav-maps'>
                        <li><Link className='link-nav' to='/vertigo'>Vertigo</Link></li>
                        <li><Link className='link-nav' to='/ancient'>Ancient</Link></li>
                        <li><Link className='link-nav' to='/overpass'>Overpass</Link></li>
                        <li><Link className='link-nav' to='/nuke'>Nuke</Link></li>
                        <li><Link className='link-nav' to='/anubis'>Anubis</Link></li>
                    </ul>
                </li>
            </nav>
        </div>
    </header>
)