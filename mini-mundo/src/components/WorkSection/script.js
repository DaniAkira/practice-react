import React from "react";
import Card from "../Card/script";

export default function WorkSection() {
    return (
        <section className="WorkSection">
            <div>
                <h2>Experiência De Trabalho</h2>
                <p>
                    Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital,
                nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
                </p>
            </div>
            <div className="CardSection">
                <Card
                    date = "JUNHO 2012 - 2016" 
                    tittle = "Web Designer"
                    company = "Pied Piper StartUp."
                    about = "Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card 
                    date = "AGOSTO 2016 - 2019"
                    tittle = "Product Designer"
                    company = "E Corp."
                    about = "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                />
                <Card 
                    date = "FEVEREIRO 2019 - 2021"
                    tittle = "Digital Consulting"
                    company = "Arasaka Inc."
                    about = "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />    
            </div>
        </section>
    )
}