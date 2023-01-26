import React from "react";
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import './style.css';

export const Sabores = () => (
    <div>
        <Header/>

        <main>
            <section className="limited-section">
                <div className="flavors-banner-section">
                    <h1>NOSSOS SABORES</h1>
                </div>
            </section>

            <section className="limited-section">
                <div className="flavors-menu">
                    <h2>CONHEÇA NOSSOS SABORES</h2>
                    <div className="flavors">
                        <div className="card-flavor">
                            <img src="assets/sabor-oreo.jpg"></img>
                            <h3>Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                        <div className="card-flavor">
                            <img src="assets/sabor-pistache.png"></img>
                            <h3>Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                        <div className="card-flavor">
                            <img src="assets/sabor-cookies-avela.png"></img>
                            <h3>Cookies</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                        <div className="card-flavor">
                            <img src="assets/sorbet-kiwi.png"></img>
                            <h3>Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className="card-flavor">
                            <img src="assets/sorbet-morango.png"></img>
                            <h3>Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className="card-flavor">
                            <img src="assets/sorbet-limao.png"></img>
                            <h3>Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Footer/>
    </div>
)
