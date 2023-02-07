import React from "react";
import './style.css';


const grenadesArray = [
    {
        grenadeImg : 'assets/mirage/mir-smoke-ct.jpg',
        spot : 'Smoke Base CT Bomb A',
        map : 'mirage',
        side : 'Ct',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-jungle.jpg',
        spot : 'Smoke Jungle Bomb A',
        map : 'mirage',
        side : 'TR',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-L.jpg',
        spot : 'Smoke L meio',
        map : 'mirage',
        side : 'TR',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-janela.jpg',
        spot : 'Smoke Janelão meio',
        map : 'mirage',
        side : 'TR',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Com JumpThrow'
    },
/* INFERNO */ 
    {
        grenadeImg : 'assets/inferno/inf-molly-nilba.jpg',
        spot : 'Molotove Nilba Bomb B',
        map : 'inferno',
        side : 'TR',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/inferno/inf-molly-tripla.jpg',
        spot : 'Molotove Tripla Bomb B',
        map : 'inferno',
        side : 'TR',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Sem jumpThrow'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-ct.jpg',
        spot : 'Smoke CT Bomb B',
        map : 'inferno',
        side : 'TR',
        tickRate : 'Tickrate 64/128', 
        jumpThrow : 'Sem JumpThrow',
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-3d.jpg',
        spot : 'Smoke 3D',
        map : 'inferno',
        side : 'TR',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-rua.jpg',
        spot : 'Smoke Rua Bomb A',
        map : 'inferno',
        side : 'TR',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },

    /* Overpass */ 

    {
        grenadeImg : 'assets/overpass/over-molly-toxico.jpg',
        spot : 'Molotove Tóxico Bomb B',
        map : 'overpass',
        side : 'TR',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-banco.jpg',
        spot : 'Smoke Banco Bomb A',
        map : 'overpass',
        die : 'TR',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-ceu.jpg',
        spot : 'Smoke Céu Bomb B',
        map : 'overpass',
        side : 'TR',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-lixeira.jpg',
        spot : 'Smoke Lixeira Bomb A',
        map : 'overpass',
        side : 'TR',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow'
    },

];


export const MapMainSection = (props) => (
        <div className="map-main-section">
        {
            grenadesArray.filter(grenade => (
                grenade.map === props.map
            )).map(grenade => (
                <div className="grenade-card">
                    <div className="img-grenade">
                        <img src={grenade.grenadeImg}></img>
                    </div>
                    <div className="infos-area">
                        <h2>{grenade.spot}</h2>
                        <div className="infos">
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
                </div>
            ))
        }
        </div>
    )
        

