import React from 'react';

export default function Header() {
    return (
        <header id='home'>
            <div className='limit-section'>
                <img alt="logo" src="assets/logo.png">
                </img>
                <nav>
                    <a href='#banner'>HOME</a>
                    <a href="#products">PRODUTOS</a>
                    <a href='#about'>SOBRE</a>
                    <a href='#contact'>CONTATOS</a>
                </nav>
            </div>
        </header>
    )
}