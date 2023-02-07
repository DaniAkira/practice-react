import React from "react";
import "./style.css";

export const MapBannerSection = (props) => (
  <section className="map-banner-section" id="banner-area">
    <img src={props.imgMapSrc}></img>
    <div className="name-logo-map">
      <h2>{props.name}</h2>
      <img src={props.logoMapSrc}></img>
    </div>
  </section>
);
