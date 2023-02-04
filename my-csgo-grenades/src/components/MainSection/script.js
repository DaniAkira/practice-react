import React from "react";
import './style.css';


import { CardMaps } from "./CardMaps/script";

export const MainSection = () => (
    <section className="main-section">
        <div className="main-about">
            <h2>Todos os mapas da rotação competitiva</h2>
            <p>Estamos trabalhando para abranger todos os mapas com a maior gama de granadas para ajudar a melhorar sua gameplay.</p>
        </div>

        <div className="card-map-main-section">
            <CardMaps 
                imgMap = 'assets/mirage.jpg'
                name = 'Mirage'
                imgLogo = 'assets/mirage-logo.png'
                linkTo ='/mirage'
            />
            <CardMaps 
                imgMap = 'assets/inferno.jpg'
                name = 'Inferno'
                imgLogo = 'assets/inferno-logo.png'
                linkTo ='/inferno'
            />
            <CardMaps 
                imgMap = 'assets/overpass.jpg'
                name = 'Overpass'
                imgLogo = 'assets/overpass-logo.png'
                linkTo ='/overpass'
            />
            <CardMaps 
                imgMap = 'assets/vertigo.jpg'
                name = 'Vertigo'
                imgLogo = 'assets/vertigo-logo.png'
                linkTo ='/vertigo'
            />
            <CardMaps 
                imgMap = 'assets/nuke.jpg'
                name = 'Nuke'
                imgLogo = 'assets/nuke-logo.png'
                linkTo ='/nuke'
            />
            <CardMaps 
                imgMap = 'assets/ancient.jpg'
                name = 'Ancient'
                imgLogo = 'assets/ancient-logo.png'
                linkTo ='/ancient'
            />
            <CardMaps 
                imgMap = 'assets/anubis.jpg'
                name = 'Anubis'
                imgLogo = 'assets/anubis-logo.png'
                linkTo ='/anubis'
            />
        </div>
    </section>
)