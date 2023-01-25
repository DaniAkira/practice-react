import React from "react";
import { BackButton } from "../BackButton";
import './style.css'

export const FrontEndPage = () => (
    <div className="front-end-content">
        <h1>React.JS</h1>

        <p>
            React é uma biblioteca JavaScript para a criação de interfaces de usuário e, nesse contexto, uma
            das tecnologias mais ultilizadas pelo mercado. No guia abaixo você aprendeá quais são os
            pré-requisitos para iniciar no React do jeito certo e como criar as suas primeiras SPAs.
        </p>

        <a className="link-dev" href="https://www.devmedia.com.br/react/">Guia de React</a>

        <BackButton />
    </div>
)