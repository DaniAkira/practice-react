import React from "react";
import './style.css'

export default function Header(props) {
    return (
        <header className={props.mode === false ? 'HeaderDark' : 'HeaderLight'}>
            <img src="./assets/logo.png"></img>
            <button onClick={props.clickSwapMode} className={props.mode === false ? 'ModeBtnDark' : 'ModeBtnLight'}>
                <img src={props.mode === false ? './assets/sun.png' : './assets/moon.png'}></img>
            </button>
        </header>
    )
}