import React, { useState } from "react";
import './style.css'


export default function HoomePage() {
    const [ randomNumber, setRandomNumber ] = useState(1);

    function generateRandomNumber() {
        const newNumber = Math.floor(Math.random() * (100 - 1) + 1);
        setRandomNumber(newNumber);
    }

    return (
        <main>
            <h3>Gerador de Número aleatório</h3>
            <h1>{randomNumber}</h1>

            <div className="button-area">
                <label>
                    Click no botão abaixo para gerar um número aleatório
                </label>

                <button onClick={ generateRandomNumber }>
                    Gerar número
                </button>
            </div>
        </main>
    )
}