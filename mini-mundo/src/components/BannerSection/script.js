import React from "react";
import './style.css';

export default function BannerSection(props) {
    return (
        <section className={props.mode === false ? 'BannerSectionDark' : 'BannerSectionLight'}>
            <div className={props.mode === false ? 'BannerImgDark' : 'BannerImgLight'}></div>
            <div className="BannerAbout">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    )
}