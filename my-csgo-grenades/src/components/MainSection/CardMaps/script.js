import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export const CardMaps = (props) => (
    <div className="card-maps">
        <div className="map-img-section">
            <div className={props.name}></div>
        </div>
        <div className="card-about">
            <div className="card-about-info" > 
                <h3>{props.name}</h3>
                <img className="img-map-logo" src={props.imgLogo}></img>
            </div>
            <button className="grenades-button">< Link to={props.linkTo}>Ver granadas</Link></button>
        </div>
    </div>
)