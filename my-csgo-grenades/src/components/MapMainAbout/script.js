import React from "react";
import "./style.css";

export const MapMainAbout = () => (
  <div className="map-main-about">
    <h2>Você pode filtrar as granadas</h2>
    <div className="filter-buttons">
      <button className="filter-button">CT</button>
      <button className="filter-button">TR</button>
      <button className="filter-button">Tickrate 128</button>
      <button className="filter-button">Tickrate 64</button>
      <button className="filter-button">JumpThrow</button>
      <button className="filter-button">Bomb A</button>
      <button className="filter-button">Bomb B</button>
    </div>
  </div>
);
