import React from "react";
import './style.css';   

export default function Footer(props) {
    return (
        <footer className={props.mode === false ? 'FooterDark' : 'FooterLight'}>
            <img src="./assets/logo.png"></img>
            <p>
                Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
            ferramentas e tecnologias personalizadas.
            </p>
            <div className="Icons">
                <img src="./assets/facebook.png"></img>
                <img src="./assets/twitter.png"></img>
                <img src="./assets/linkedin.png"></img>
                <img src="./assets/dribble.png"></img>
                <img src="./assets/behance.png"></img>
                <img src="./assets/google-plus.png"></img>
            </div>
            <div className="Rights">
                <p>Copyright 2022 &copy; <span>Daniel Akira</span></p>
            </div>
        </footer>
    )
}