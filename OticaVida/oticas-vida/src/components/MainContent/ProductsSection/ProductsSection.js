import React from "react";

export default function ProductsSection() {
    return (
        <section id="products">
            <div className="limit-products">
                <h2>NOSSOS ÓCULOS:</h2>
                <p>
                    Trabalhamos com óculos de sol e de grau, modelos masculinos, femininos e infantil
                </p>
                <p>
                    Com preços acewssiveis e com a maior qualidade do mercado
                </p>
                <div className="products">
                    <div className="card">
                        <h3>Óculos de grau</h3>
                        <img alt="Óculos 01" src="assets/oculos01.png"></img>
                        <p>
                            R$ 530,99
                        </p>
                    </div>
                    <div className="card">
                        <h3>Óculos de sol</h3>
                        <img alt="Óculos 02" src="assets/oculos02.png"></img>
                        <p>
                            R$ 710,99
                        </p>
                    </div>
                    <div className="card">
                        <h3>Óculos de sol</h3>
                        <img alt="Óculos 03" src="assets/oculos03.png" ></img>
                        <p> 
                            R$ 470,99
                        </p>
                    </div>
                    <div className="card">
                        <h3>Óculos de sol com grau</h3>
                        <img alt="Óculos 04" src="assets/oculos04.png" ></img>
                        <p>
                            R$ 825,99
                        </p>
                    </div>
                </div>
                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais</li>
                    <li>Flexibilidade no pagamento</li>
                </ul>
            </div>
        </section>
    )
}