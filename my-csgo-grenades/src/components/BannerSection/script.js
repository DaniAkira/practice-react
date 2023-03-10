import React from "react";
import "./style.css";

export const BannerSection = () => (
  <section className="banner-section" id="banner-area">
    <div className="img-fallen">
      <img src="assets/fallen-fer.png"></img>
    </div>

    <div className="banner-about">
      <h1>DESCUBRA NOVAS GRANADAS</h1>
      <div className="bar"></div>
      <span>Melhore seu jogo</span>
      <p>
        As granadas fazem grande diferença quando são lançadas com sabedoria e
        no tempo certo, conheça nossa ampla biblioteca de granadas!
      </p>
    </div>

    <div className="img-rain">
      <img src="assets/rain-ropz.png"></img>
    </div>
  </section>
);
