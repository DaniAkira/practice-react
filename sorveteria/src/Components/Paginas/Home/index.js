import React from "react";
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import './style.css'

export const HomePage = () => (
    <div>
        <Header/>

        <main>
            <section className="limited-section">
                <div className="home-banner-section">
                    <img className="ice-cream-img" src="assets/banner-home.png"></img>
                    <h1>SORTEVE ARTESANAL</h1>
                </div>
            </section>

            <section className="flavor-section">             
                <img className="img-section" src="assets/banner-sabores.jpg"></img>
                <div className="card">
                    <h2>NOSSOS SABORES</h2>
                    <h3>Novos e deliciosos</h3>
                    <p>
                        Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
                    gelateria todos os nossos produtos são naturais, à base de
                    frutas e sem nenhum conservante! Também temos opções sem lactose
                    e sem açúcar. Venha conhecer e perceber que tem como o sorvete
                    ser delicioso e saudável ao mesmo tempo!
                    </p>
                </div>
            </section>

            <section className="events-section">
                <div className="card">
                    <h2>NOSSOS EVENTOS</h2>
                    <h3>Delicias com sorvetes</h3>
                    <p>
                        Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
                    prontinhos para te atender e oferecer os melhores eventos com os melhores
                    sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                    </p>
                </div>
                <img className="img-section" src="assets/eventos-image.jpg"></img>
            </section>

            <section className="about-section">
                <img className="img-section" src="assets/sobre-image.jpg"></img>
                <div className="card">
                    <h2>NOSSOS EVENTOS</h2>
                    <h3>Alegria em cada casquinha!</h3>
                    <p>
                        Venha tomar o melhor sorvete da região aqui com a gente! Nós
                    estamos há anos no mercado produzindo o que tem de melhor para o
                    nosso cliente e você não pode ficar fora dessa. Venha nos fazer
                    uma visita e aproveite o melhor atendimento e o melhor sorvete
                    da cidade.    
                    </p>
                </div>
            </section>
        </main>

        <Footer/>
    </div>
)
