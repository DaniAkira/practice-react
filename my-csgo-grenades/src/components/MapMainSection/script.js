import React from "react";
import "./style.css";
import { grenadesArray } from "../data/data";
import { GrenadeVideoSection } from "../GrenadeVideoSection/script";

export const MapMainSection = (props) => (
  <section className="map-main-section">
    {
    grenadesArray
      .filter((grenade) => grenade.map === props.map)
      .map((grenade, i) => (
        <div className="grenade-card" id={i}>
          <div className="img-grenade">
            <img src={grenade.grenadeImg}></img>
          </div>
          <div className="infos-area">
            <h2>{grenade.name}</h2>
            <div className="infos">
              <div className="info">
                <div className="circle"></div>
                <p>{grenade.spotThrow}</p>
              </div>
              <div className="info">
                <div className="circle"></div>
                <p>{grenade.bomb}</p>
              </div>
              <div className="info">
                <div className="circle"></div>
                <p>{grenade.side}</p>
              </div>
              <div className="info">
                <div className="circle"></div>
                <p>{grenade.tickRate}</p>
              </div>
              <div className="info">
                <div className="circle"></div>
                <p>{grenade.jumpThrow}</p>
              </div>
            </div>
          </div>
          <GrenadeVideoSection 
            video = {grenade.grenadeImg}
            name = {grenade.name}
            grenadeId = {i}
          />
        </div>
      ))}
  </section>
);
