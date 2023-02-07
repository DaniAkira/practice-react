import React from "react";
import { GrenadeCard } from "./GrenadeCard/script";
import './style.css';
import { grenadeInfos } from "./Data/script";

export const MapMainSection = () => (
    <section className="map-main-section">
        <div className="map-card-section">
            <GrenadeCard />
        </div>
    </section>
);