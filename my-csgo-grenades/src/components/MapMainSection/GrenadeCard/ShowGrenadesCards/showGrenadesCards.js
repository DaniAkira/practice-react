import React from "react";
import { mirageGrenades } from "./FilterGrenades/filterGrenadesByMap";
import { GrenadeCard } from "./GrenadeCard/script";

export const showGrenadeCards = (mirageGrenades) => {
    mirageGrenades.forEach((filterInfos))
};

function filterInfos(grenade) {
    let grenadeInfos = [];
    for(let i = 0; i < grenade.length; i++){
        if(grenade.i == true){
            grenadeInfos += grenade.i
        }
    }
    return grenadeInfos;
}