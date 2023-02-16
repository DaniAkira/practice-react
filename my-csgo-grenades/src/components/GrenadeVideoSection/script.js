import React from "react";
import "./style.css";

export const GrenadeVideoSection = (props) => {

    return (
    <section className={`grenade-video-section ${props.videoClass}`}>
        <div className="video-area">
            <img src={props.video}></img>
            <h2>{props.name}</h2>
        </div>
    </section>
)}