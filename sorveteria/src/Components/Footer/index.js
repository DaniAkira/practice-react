import React from "react";
import './style.css';

export const Footer = () => (
    <footer>
        <div className="contact-section">
            <img src="assets/logo.png"></img>

            <div className="card-contact">
                <h3>ENDEREÇO</h3>
                <p>Av. Bernardino de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>

            <div className="card-contact">
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>Tel: (11)3456-7890</p>
            </div>

            <div className="card-contact">
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>100:00 - 22:00</p>
            </div>
        </div>
        <div className="direitos">
            <p>
                Galeteria, Desenvolvida com React JS
            </p>
        </div>
    </footer>
)