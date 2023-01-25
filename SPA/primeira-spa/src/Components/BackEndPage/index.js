import React from "react";
import { BackButton } from "../BackButton";
import './style.css'

export const BackEndPage = () => (
    <div className="back-end-content">
        <h1>Node.js</h1>

        <p>
            Node.js é uma tecnologia usada para executar código JavaScript fora do naegador. Com ele podemos
            construir aplicações web em geral, desde web sites até APIs e microsserviços.
        </p>

        <a className="link-dev" href="https://www.devmedia.com.br/node.js/">Guia de Node.js</a>

        <BackButton />
    </div>
);