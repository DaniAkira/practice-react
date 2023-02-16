import React from "react";
import "./style.css";
import { grenadesArray } from "../data/data";
import { GrenadeVideoSection } from "../GrenadeVideoSection/script";
import { useState } from "react";

export const MapMainSection = (props) => {

  const [grenadeCardState, setGrenadeCardState] = useState(false);

  const toggleHideVideos = () => {
    setGrenadeCardState(grenadeCardState => !grenadeCardState);
  }

  let videoClass = grenadeCardState ? null : "hide-videos";

  return (
  <section className="map-main-section">
    {
    grenadesArray
      .filter((grenade) => grenade.map === props.map)
      .map((grenade, i) => (
        <div 
        className="grenade-card" 
        id={i}
        onClick={toggleHideVideos}
        >
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
            videoClass = {videoClass}
          />
          <div className={`closeBox ${videoClass}`}>
                <div 
                className="cross"
                ></div>
            </div>
        </div>
      ))}
  </section>
)};
