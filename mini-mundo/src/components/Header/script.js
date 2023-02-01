import React from "react";
import './style.css'

export default function Header() {
    return (
        <header>
            <img src="./assets/logo.png"></img>
            <button className="ModeBtn">
                <img src="./assets/moon.png"></img>
            </button>
        </header>
    )
}