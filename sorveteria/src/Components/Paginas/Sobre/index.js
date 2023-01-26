import React from "react";
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import './style.css'

export const Sobre = () => (
    <div>
        <Header/>

        <main>
            <section className="limited-section">
                <div className="about-banner-section">
                    <h1>A GELATERIA</h1>
                </div>
            </section>

            <section className="section-about">
                <h2>Sobre Nós</h2>
                <h3>Nós simplismente adoramos sorvete!</h3>
                <p>
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
                sorvete produzido. Fazemos o melhor sorvete para os nossos
                clientes e gostamos de receber elogios. Estamos operando desde
                2009 com as melhores matérias-primas para a produção final do
                sorvete. Vendemos tanto para varejo como para atacado.
                </p>
                <p>
                    Nossos clientes podem comprar os nossos sorvetes e degustar na
                nossa loja ou levar para sua residência e aproveitar junto com a
                família. Também vendemos para estabelecimentos e criamos eventos
                como festa de aniversário, formaturas e eventos empresariais. Para
                contratar os nossos serviços, basta entrar em contato conosco.
                Iremos proporcionar o melhor atendimento e os melhores produtos
                para você fazer a sua festa mais saborosa, com o melhor sorvete da
                cidade.
                </p>
            </section>

            <section className="img-about-section">
                <img className="img-resize" src="assets/sobre-image.jpg"></img>
                <img src="assets/sorveteria.jpg"></img>
            </section>
        </main>

        <Footer/>
    </div>
)
