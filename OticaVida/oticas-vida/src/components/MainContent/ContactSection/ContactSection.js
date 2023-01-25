import React from "react";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="limit-contact">
        <h2>FALE CONOSCO</h2>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>
        <div className="card-contact">
          <div className="contact">
            <h4>Contato</h4>
            <div className="media">
              <img src="assets/local.png"></img>
              <p>Nova Iguaçu, RJ</p>
            </div>
            <div className="media">
              <img src="assets/telefone.png"></img>
              <p>(21) 9999-9999</p>
            </div>
            <div className="media">
              <img src="assets/email.png"></img>
              <p>contato@oticavida.com</p>
            </div>
          </div>

          <div className="contact">
            <h4>Nossas Redes Sociais</h4>
            <div className="media">
              <img src="assets/fb.png"></img>
              <p>/OticaVida</p>
            </div>
            <div className="media">
              <img src="assets/ig.png"></img>
              <p>@oticavidarj</p>
            </div>
            <div className="media">
              <img src="assets/tt.png"></img>
              <p>@oticavidarj</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
