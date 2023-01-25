import React from "react";

export default function AboutSection() {
    return (
        <section id="about">
            <div className="about">
                <h2>QUEM SOMOS NÓS?</h2>
                <p>
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.     
                </p>
                <div className="limit-about">
                    <img alt="atendimento" src="assets/atendimento.png"></img>
                    <div className="box-about">
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="box-about">
                        <h3>ATENDIMENTO FLEXÍVEL</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img alt="store" src="assets/loja.png"></img>
                </div>
            </div>
        </section>
    )
}