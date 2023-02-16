import React from "react";
import "./style.css";

export const GrenadeVideoSection = (props) => {
    {
        const grenadeCard = document.querySelector(".grenade-card");
        const videoCard = document.querySelector(".grenade-video-section");

        const closeCross = document.querySelector(".cross");

        const removeHideVideos = () => (grenadeCard.addEventListener("click", function() {
            videoCard.classList.remove('hide-videos');
        }))

        const addHideVideos = () => (closeCross.addEventListener("click", function () {
            videoCard.classList.add("hide-videos");
        }))

        removeHideVideos();
        addHideVideos();
    }
    
    return (
    <section className="grenade-video-section hide-videos">
        <div className="video-area">
            <img src={props.video}></img>
            <h2>{props.name}</h2>
            <div className="closeBox">
                <div className="cross"></div>
            </div>
        </div>
    </section>
)}